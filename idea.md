KUnnen we niet een aantal labs voorzien dat ze moeten voorbereiden en dan komen maken. Desnoods in group?

Creating an appImage:

The FreeCAD development releases built with Conda in this repo are released on a weekly basis (Sundays)

Note to AppImage Users: due to issues with our chosen upstream packager (conda-forge) not supporting updated versions of libstdc++ trying to run the FreeCAD AppImage will core dump. We're waiting for conda-forge volunteers to update this. In the meantime there is a workaround (forum link). We apologize for the inconvenience.

Extract the contents of the AppImage using the --appimage-extract flag like so: (this operation will take a few moments)
./FreeCAD_weekly-builds-XXXXX-Linux-Conda_glibc2.12-x86_64.AppImage --appimage-extract
It should of generated a directory named squashfs-root
Delete squashfs-root/usr/lib/libstdc++.so.6 and squashfs-root/usr/lib/libstdc++.so in its sub-directory
rm squashfs-root/usr/lib/libstdc++.so
rm squashfs-root/usr/lib/libstdc++.so.6
Now regenerate the AppImage from this folder by using appimagetool from the official website. (this following operation may take several minutes to complete)
./appimagetool-x86_64.AppImage squashfs-root
Run the new AppImage (it should generate a default name like FreeCAD_Conda-x86_64.AppImage)
./FreeCAD_Conda-x86_64.AppImage
Result: FreeCAD AppImage should successfully run
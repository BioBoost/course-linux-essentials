# Backups

TODO

## Archiving

GNU tar is an archiving program designed to store multiple files in a single file (an archive), and to manipulate such archives. The archive can be either a regular file or a device (e.g. a tape drive, hence the name of the program, which stands for tape archiver), which can be located either on the local or on a remote machine.

Create basic tar file with no compression

```
tar -cf backup.tar <dir>
```

Create tar file and compress using gzip.

Gzip uses the Lempel-Ziv algorithm used in zip and PKZIP.  The amount of compression obtained depends on the size of the input and the distribution of common substrings.  Typically, text such as source code or English is reduced by 60-70%.  Compression is generally much better than that achieved by LZW (as used in compress), Huffman coding (as  used in pack), or adaptive Huffman coding (compact).

```
tar -czf backup.tar.gz <dir>
```

Create tar file and compress using bzip2.

bzip2 compresses files using the Burrows-Wheeler block sorting text compression algorithm, and Huffman coding.  Compression is generally considerably better than that achieved by more conventional LZ77/LZ78-based compressors, and approaches the performance of the PPM family of statistical compressors.

```
tar -cjf backup.tar.bz <dir>
```


Which one to use? (Source: https://superuser.com/questions/205223/pros-and-cons-of-bzip-vs-gzip)

Gzip and bzip2, as well as xz and lzop, are functionally equivalent. (There once was a bzip, but it seems to have completely vanished off the face of the world.) Other common compression formats are zip, rar and 7z; these three do both compression and archiving (packing multiple files into one). Here are some typical ratings in terms of speed, availability and typical compression ratio (note that these ratings are somewhat subjective, don't take them as gospel):

decompression speed (fast > slow): lzop > gzip, zip > xz > 7z > rar > bzip2
compression speed (fast > slow): lzop > gzip, zip > xz > bzip2 > 7z > rar
compression ratio (better > worse): xz > 7z > rar, bzip2 > gzip > zip > lzop
availability (unix): gzip > bzip2 > xz > lzop > zip > 7z > rar
availability (windows): zip > rar > 7z > gzip > bzip2, lzop, xz
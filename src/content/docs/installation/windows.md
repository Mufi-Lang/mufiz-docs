---
title: "Windows"
description: "Installation on Windows"
---

## Scoop
To install on Windows, we recommend using the package manager `scoop`.
We host our own Scoopt bucket on [Github](https://github.com/Mustafif/mufi-bucket).
Once scoop has been installed, you can install MufiZ by running the following command:

Supported architectures:
- `x86_64`
- `i386`
- `aarch64`

```powershell
$ scoop bucket add mufi-bucket https://github.com/mustafif/mufi-bucket
$ scoop install mufi-bucket/MufiZ
```

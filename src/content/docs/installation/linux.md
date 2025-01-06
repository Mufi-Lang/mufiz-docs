---
title: "Linux"
description: "Installation on Linux"
---

## Manual Installation

```bash
# Need to replace {target} with the target triplet of your system
$ wget https://github.com/Mufi-Lang/MufiZ/releases/download/v0.8.0/mufiz_0.8.0_{target}.zip
$ unzip mufiz_0.8.0_{target}.zip
$ sudo mv mufiz /usr/local/bin
$ mufiz --version
```

## APT

Supported Debian-based distributions:
- Debian 12 (Bookworm)
- Debian 13 (Trixie)
- Debian 14 (Forky)
- Ubuntu 22.04 (Jammy)
- Ubuntu 24.04 (Noble)

Supported architectures:
- `amd64`
- `i386`
- `arm64`
- `mipsel`
- `mips64el`
- `mips`
- `powerpc`


```bash
$ curl -s https://packagecloud.io/install/repositories/Mustafif/MufiZ/script.deb.sh | sudo bash
$ sudo apt install mufiz
```

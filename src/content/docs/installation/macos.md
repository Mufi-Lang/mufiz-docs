---
title: "MacOS"
---

## Homebrew
We host our own Homebrew Tap on [Github](https://github.com/Mustafif/homebrew-mufi).
To install MufiZ on MacOS, you can run the following commands:

Supported architectures:
- `x86_64` (Intel Macs and Linux)
- `arm64`

```bash
$ brew tap mustafif/mufi
$ brew install MufiZ
```

## Shell Script

You can use the following command to install MufiZ on your system with our official script installer:

```bash
# Install MufiZ and mufizup
curl -fsSL https://raw.githubusercontent.com/Mufi-Lang/installer/main/installer.sh | sudo sh -s install

# After installation, you can use mufizup directly:
sudo mufizup update    # Update MufiZ
sudo mufizup remove    # Remove MufiZ and mufizup
```

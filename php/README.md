# PHP NetStorage Test

This is an implementation of the FlySystem example here:

<https://github.com/akamai/NetStorageKit-PHP>


## Setup

The NetStorage API is already added to the project (`composer.json`). Simply install the project dependencies like so.

```bash
composer install
```

Next, copy `config.sample.php` to `config.php`, and change the contents of `config.php` to match your settings.

Finally, run the script.

```bash
php upload.php
```

NOTE: For simplicity, there is no `hello3.txt` file locally. Instead we created a file on the NetStorage containing the contents of the string `$fileContents` found in `upload.php`.

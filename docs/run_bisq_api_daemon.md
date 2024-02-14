# Build and run Bisq API daemon

## Build bisq

* Go to https://github.com/bisq-network/bisq/releases to find the latest Bisq release.

* Set the env var:
```shell
$ VERSION="1.9.14"
```

* Download the latest Bisq source code and extract the archive:
```shell
$ cd ~/
$ wget -O bisq-v$VERSION.zip https://github.com/bisq-network/bisq/archive/refs/tags/v$VERSION.zip
$ unzip bisq-v$VERSION.zip
$ cd bisq-$VERSION
```

* Build Bisq:
```shell
$ ./gradlew clean build
```


## Build Bisq API daemon dist package

* Execute `create-daemon-dist.sh` script:
```shell
$ cd daemon/package/
$ ./create-daemon-dist.sh $VERSION
```

* Check that the package has been generated:
```shell
$ ls -ls
```

* Move the archive:
```shell
$ mv bisq-daemon-*.zip ~/
```

* Cleanup:
```shell
$ cd ~/
$ rm -fr bisq-$VERSION
```

* Unpack the archive:
```shell
$ unzip bisq-daemon-$VERSION.zip
$ rm -fr ~/bisq-daemon
$ mv bisq-daemon-$VERSION ~/bisq-daemon
```


## Run the Bisq API daemon

* Run daemon.jar on Mainnet:
```shell
$ java -jar ~/bisq-daemon/daemon.jar --apiPassword=becareful
```

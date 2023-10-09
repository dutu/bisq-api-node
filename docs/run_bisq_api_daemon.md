# Build and run Bisq API daemon

## Build bisq

* Find the latest Bisq release and set the env var:
```shell
$ VERSION="v1.9.13"
```

* Clone Bisq latest release:
```shell
$ cd ~/
$ git clone --branch release/$VERSION https://github.com/bisq-network/bisq
$ cd bisq
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

* move the archive:
```shell
$ mv bisq-daemon-*.zip ~/
```

* Cleanup:
```shell
$ cd ~/
$ rm -fr bisq
```


## Run the Bisq API daemon

* Unpack the archive: 
```shell
$ unzip bisq-daemon-$VERSION.zip 
$ mv bisq-daemon-$VERSION ~/bisq-daemon
```

* Run daemon.jar on Mainnet:
```shell
$ java -jar ~/bisq-daemon/daemon.jar --apiPassword=becareful
```

# Check, Remove or Install Java on Debian

## Check installed Java 

* Display information about the installed Java version, including the version number and other details like the build and runtime environment:
```shell
$ java -version

```

* Show you a list of installed Java versions. The currently selected default will be indicated in the list:
```shell
$ update-alternatives --config java
```


## Remove Java

* Remove if installed via Package Manager:
```shell
$ sudo apt-get remove openjdk-*  # For OpenJDK
$ sudo apt-get remove oracle-java*  # For Oracle JDK
```

* Remove if installed manually:
```shell
# sudo rm -rf /path/to/java_directory
$ sudo rm -rf /usr/lib/jvm/openjdk-11.0.2/bin/java
```

* Update environment variables. Open your .bashrc, .bash_profile, or .profile file in a text editor.
```shell
$ nano ~/.bashrc
$ nano ~/.bash_profile
$ nano ~/.profile
```

* Look for a line that sets the JAVA_HOME variable and either remove it or update it. It will look something like:
```shell
$ export JAVA_HOME=/path/to/java_directory
```

* Update the PATH Variable. In the same file where you found JAVA_HOME, look for the PATH variable being set. It might look something like:
```shell
$ export PATH=$JAVA_HOME/bin:$PATH
```

or

```shell
$ export PATH=/path/to/java_directory/bin:$PATH
```


## Install OpenJDK 15 on Debian

* Download installation script and make it executable:
```shell
$ wget https://raw.githubusercontent.com/dutu/bisq-api-node/master/docs/install_java15_linux.sh
$ chmod +x install_java15_linux.sh
```

* Run Java installation script:
```shell
$ sudo ./install_java15_linux.sh
```

* Confirm that Java has been installed correctly:

```shell
$ java -version

```

* Add the bin directory of the installed JDK to your PATH environment variable:
```shell
$ export PATH=/usr/lib/jvm/openjdk-15/bin:$PATH
```

* Make the change permanent. Edit `.bashrc` and add the line below at the end of the file::
```shell
$ nano ~/.bashrc
```
    
```shell
export PATH=/usr/lib/jvm/openjdk-15/bin:$PATH
```

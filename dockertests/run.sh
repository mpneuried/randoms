VERSIONS[0]=6.1
VERSIONS[1]=5.4
VERSIONS[2]=4.4
VERSIONS[3]=0.12
VERSIONS[4]=0.10
VERSIONS[5]=lts
VERSIONS[6]=latest

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

SCRIPTDIR="dockertests"
cd $DIR
cd ..

for version in "${VERSIONS[@]}"
do
   :
   FV=`echo $version | sed 's/\./_/'`
   DFile="Dockerfile.$FV"
   if [ -f "$SCRIPTDIR/$DFile" ]; then
	   echo "TEST Version: $version"
	   BUILDLOGS="$DIR/dockerbuild.$version.log"
	   rm -f $BUILDLOGS
	   echo "Start build ..."
	   docker build -t=mpneuried.randoms.dockertest.$version -f=$SCRIPTDIR/$DFile . > $BUILDLOGS
	   echo "Run test ..."
	   docker run --name=mpneuried.randoms.dockertest.$version mpneuried.randoms.dockertest.$version >&2
	   echo "Remove container ..."
	   docker rm mpneuried.randoms.dockertest.$version >&2
   else
	   echo "Dockerfile '$DFile' not found"
   fi
done

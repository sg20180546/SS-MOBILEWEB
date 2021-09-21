
VERSION=$1
add=0.1


# add floating number need bc(basic calculator), but git bash does not support bc, issue#1
if [[ $# -eq 0 ]]; then
	currentVersion=$(cat ./public/manifest.json | jq \
		.version)
	#newVersion= awk '{$curren}'

	echo "currentversion : $currentVersion"
	#echo "newVersion : $newVersion"
	exit 1
fi


echo "------------UPDATE MANIFEST VERSION $1--------------------"

cat ./public/manifest.json | jq \
	--arg version "$VERSION"\
	'.version|=$version' > tempfile.json && mv tempfile.json \
	./public/manifest.json


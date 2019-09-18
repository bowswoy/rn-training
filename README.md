# rn-training

`npm i -g watchman`

`npm i -g react-native-cli`

`rm -rf node_modules;`
`rm -rf $TMPDIR/react-native-packager-cache-*;`
`rm -rf $TMPDIR/metro-*;`
`rm -rf $TMPDIR/react-*;`
`rm -rf $TMPDIR/haste-*;`
`watchman watch-del-all;`
`yarn;`
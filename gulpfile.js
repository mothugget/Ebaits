const { src, dest } = require('gulp');
const map = require('map-stream');
const path = require('path');

function populateComponents() {
    return src('client/src/components/*.js')
        .pipe(map(function (file, cb) {
            if (file.contents.toString() === "" && path.extname(file.path) === ".js") {
                const baseName = path.basename(file.path);
                const compName = baseName.slice(0, baseName.length - 3);
                file.contents = new Buffer.from(
`

export default function ${compName}(props) {
\treturn (
\t\t<div className="${compName}">${compName}</div>
\t)
}`
                );
            } else {
                console.log('nope')
            }
            cb(null, file)
        }))
        .pipe(dest('client/src/components/'))
}
// OBS: DANGEROUS will clear all your components
// // function delComp() {
// //     return src('client/src/components/*.js')
// //         .pipe(map(function (file, cb) {
// //                 file.contents = new Buffer.from(""
// //                 );

// //             cb(null, file)
// //         }))
// //         .pipe(dest('client/src/components/'))
// // }

module.exports = { populateComponents }
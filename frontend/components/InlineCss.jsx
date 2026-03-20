import {readFileSync} from 'node:fs';
import path from 'node:path';

const cssCache = new Map();

function readCss(file) {
    if (!cssCache.has(file)) {
        cssCache.set(file, readFileSync(path.join(process.cwd(), file), 'utf8'));
    }

    return cssCache.get(file);
}

export default function InlineCss({file}) {
    return (
        <style
            data-inline-css={file}
            dangerouslySetInnerHTML={{__html: readCss(file)}}
        />
    );
}

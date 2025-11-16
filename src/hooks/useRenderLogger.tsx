import { useRef, useEffect } from 'react';

function shallowDiff(prev: any, next: any) {
    const diffs: string[] = [];
    const keys = new Set([...Object.keys(prev || {}), ...Object.keys(next || {})]);
    keys.forEach((k) => {
        if (prev?.[k] !== next?.[k]) diffs.push(k);
    });
    return diffs;
}

export default function useRenderLogger(name: string, props?: any) {
    const renders = useRef(0);
    const prev = useRef<any>(props);

    useEffect(() => {
        renders.current += 1;
        const diff = shallowDiff(prev.current, props);
        if (diff.length > 0) {
            // eslint-disable-next-line no-console
            console.debug(`[render:${name}] #${renders.current} — changed props:`, diff);
        } else {
            // eslint-disable-next-line no-console
            console.debug(`[render:${name}] #${renders.current} — props same`);
        }
        prev.current = props;
    });
}

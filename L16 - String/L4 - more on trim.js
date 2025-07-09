function n(a) {
    let b = a.trim();
    let c = a.length, d = b.length;
    console.log(`Trim\t: [${a}] | [${b}]`);
    console.log(`Length\t: ${c} | ${d}`);
    console.log('\n');
}

n('     hello       ');
n('     hello, world!       ');
n(' Javscript is    awesome!');

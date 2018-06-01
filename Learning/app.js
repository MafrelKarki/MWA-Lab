const play = require('./play');
const pattern1 = require('./usingmodules/pattern');
const pattern2 = require('./usingmodules/pattern').call2;

pattern1.call1();
pattern1.call2();
pattern2();

// play.violin();
// play.clarinet();
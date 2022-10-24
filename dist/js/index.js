import { Header } from './components/header.js';
import { PokePrint } from './components/pokeprint.js';
import { Main } from './components/main.js';
import { Footer } from './components/footer.js';
try {
    new Header('body');
}
catch (e) {
    /* ... */
}
try {
    new Main('body');
}
catch (e) {
    /* ... */
}
try {
    new PokePrint('main');
}
catch (e) {
    /* ... */
}
try {
    new Footer('body');
}
catch (e) {
    /* ... */
}

/*!
 * Waves v0.7.6
 * http://fian.my.id/Waves
 *
 * Copyright 2014 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 */

import Waves from 'node-waves';

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function() {
        Waves.init();
    }, false);

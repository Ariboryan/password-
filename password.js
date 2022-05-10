(() => {
    /**
     * parse a password string into a numeric value. *
     * @param {string} password
     * @return {number}
     */
    let evaluatepassword = (password) => {
        let score = 0;
        score = password.length;
        score = (password.match( /[!]/gmi ) ) ? score + (password.match( /[!]/gmi ).length * 3 ) : score;
        score = (password.match( /[A-Z]/gm) ) ? score + 3 : score;
        score = (password.match( /[0-9]/gm) ) ? score + 3 : score;
        return score;
    };

    let scoretodata = ( score ) => {
        if ( score >= 30 ) {
            return {
                width: '100%',
                color: '#26de81',
                label: 'strong',
            };
        }
        else if ( score >= 20 ) {
            return {
                width: '66%',
                color: '#fd9644',
                label: 'medium',
            };
        }
        else {
            return {
                width: '33%',
                color: '#fc5c65',
                label: 'weak',
            };
        }
    };

    window.addEventListener( 'DOMcontectloaded', () => {
        let p = document.querySelector( '.js--password');
        let b = document.querySelector( '.js--password-bar');
        let t = document.querySelector( '.js--password-text');

        p.addEventListener( 'input', () => {

            let data = scoretodata( evaluatepassword( p.value ));

            b.style.width = data.width;
            b.style.background = data.color;
            t.innertext = data.label;
        });
    });
})();
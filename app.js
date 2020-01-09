new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,

    },
    methods: {
        startGame() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },
        attack() {
            var demage = this.calculateDamage(3, 10);
            this.monsterHealth -= demage;
            this.turns.unshift({ // unshift(): adds one or more elements to the beginning of an array
            if (this.checkWin()) {
                return; // end of function
            }
            this.monsterAttack();
        },
        specialAttack() {
            this.monsterHealth -= this.calculateDamage(10, 20);
            if (this.checkWin()) {
                return; // end of function
            }
            this.monsterAttack();
        },
        heal() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.monsterAttack();
        },
        giveUp() {
            this.gameIsRunning = false;
        },
        monsterAttack() {
            var demage = this.calculateDamage(5, 12);
            this.playerHealth -= demage;
            this.checkWin();
        },
        calculateDamage(min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin() {
            if(this.monsterHealth <= 0) {
                if(confirm('You won. New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if(confirm('You lost. New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});
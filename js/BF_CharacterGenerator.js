/*
 * Basic Fantasy Character Generator (c) 2014 by Andrew Cooper
 *
 * Basic Fantasy Character Generator is licensed under a
 * Creative Commons Attribution-ShareAlike 4.0 International License.
 *
 * See http://creativecommons.org/licenses/by-sa/4.0/.
 */

function BF_CharacterGenerator() {
    this.abilityBonuses = [0,0,0,-3,-2,-2,-1,-1,-1,0,0,0,0,1,1,1,2,2,3]; 
    this.classes = {
        None: {
            name: "Not Set",
            hitDie: 0,
            spells: ["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],
            thiefSkills: {
                openLocks: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                removeTraps: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                pickPockets: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                moveSilently: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                climbWalls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                hide: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                listen: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            },
            attackBonus: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            savingThrows: {
                deathRay: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                magicWands: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                paralysis: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                dragonBreath: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                spells: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            },
            turnUndead: {
                skeleton: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                zombie: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                ghoul: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                wight: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                wraith: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                mummy: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                spectre: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                vampire: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                ghost: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"]
            }
        },
        Fighter: {
            name: "Fighter",
            hitDie: 8,
            spells: ["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],
            thiefSkills: {
                openLocks: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                removeTraps: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                pickPockets: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                moveSilently: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                climbWalls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                hide: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                listen: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            },
            attackBonus: [0,1,2,2,3,4,4,5,6,6,6,7,7,8,8,8,9,9,10,10,10],
            savingThrows: {
                deathRay: [12,12,11,11,11,11,10,10,9,9,9,9,8,8,7,7,7,7,6,6,5],
                magicWands: [13,13,12,12,11,11,11,11,10,10,9,9,9,9,8,8,7,7,7,7,6],
                paralysis: [14,14,14,14,13,13,12,12,12,12,11,11,10,10,10,10,9,9,8,8,8],
                dragonBreath: [15,15,15,15,14,14,14,14,13,13,12,12,12,12,11,11,10,10,10,10,9],
                spells: [17,17,16,16,15,15,15,15,14,14,13,13,13,13,12,12,11,11,11,11,10]
            },
            turnUndead: {
                skeleton: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                zombie: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                ghoul: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                wight: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                wraith: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                mummy: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                spectre: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                vampire: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                ghost: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"]
            }
        },
        Mage: {
            name: "Mage",
            hitDie: 4,
            spells: [
                "None",
                "1","2","2/1","2/2","2/2/1","3/2/2",
                "3/2/2/1","3/3/2/2","3/3/2/2/1","4/3/3/2/2",
                "4/4/3/2/2/1","4/4/3/3/2/2","4/4/4/3/2/2",
                "4/4/4/3/3/2","5/4/4/3/3/2","5/5/4/3/3/2",
                "5/5/4/4/3/3","6/5/4/4/3/3","6/5/5/4/3/3",
                "6/5/5/4/4/3"
            ],
            thiefSkills: {
                openLocks: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                removeTraps: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                pickPockets: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                moveSilently: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                climbWalls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                hide: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                listen: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            },
            attackBonus: [0,1,1,1,2,2,3,3,3,4,4,4,4,5,5,5,6,6,6,7,7],
            savingThrows: {
                deathRay: [0,13,13,13,12,12,12,12,11,11,11,11,10,10,10,10,9,9,9,9,8],
                magicWands: [0,14,14,14,13,13,12,12,11,11,10,10,10,10,9,9,8,8,7,7,6],
                paralysis: [0,13,13,13,12,12,11,11,10,10,9,9,9,9,8,8,7,7,6,6,5],
                dragonBreath: [0,16,15,15,15,15,14,14,14,14,13,13,13,13,12,12,12,12,11,11,11],
                spells: [0,15,14,14,13,13,13,13,12,12,11,11,11,11,10,10,9,9,9,9,8]
            },
            turnUndead: {
                skeleton: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                zombie: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                ghoul: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                wight: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                wraith: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                mummy: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                spectre: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                vampire: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                ghost: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"]
            }
        },
        Thief: {
            name: "Thief",
            hitDie: 6,
            spells: ["None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None","None"],
            thiefSkills: {
                openLocks: [0,25,30,35,40,45,50,55,60,65,68,71,74,77,80,83,84,85,86,87,88],
                removeTraps: [0,20,25,30,35,40,45,50,55,60,63,66,69,72,75,78,79,80,81,82,83],
                pickPockets: [0,30,35,40,45,50,55,60,65,70,74,78,82,86,90,94,95,96,97,98,99],
                moveSilently: [0,25,30,35,40,45,50,55,60,65,68,71,74,77,80,83,85,87,89,91,93],
                climbWalls: [0,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99],
                hide: [0,10,15,20,25,30,35,40,45,50,53,56,59,62,65,68,69,70,71,72,73],
                listen: [0,30,34,38,42,46,50,54,58,62,65,68,71,74,77,80,83,86,89,92,95]
            },
            attackBonus: [0,1,1,2,2,3,3,4,4,5,5,5,6,6,6,7,7,7,8,8,8],
            savingThrows: {
                deathRay: [0,13,12,12,11,11,11,11,10,10,9,9,9,9,8,8,7,7,7,7,6],
                magicWands: [0,14,14,14,13,13,13,13,12,12,12,12,10,10,10,10,9,9,9,9,8],
                paralysis: [0,13,12,12,12,12,11,11,11,11,10,10,10,10,9,9,9,9,8,8,8],
                dragonBreath: [0,16,15,15,14,14,13,13,12,12,11,11,10,10,9,9,8,8,7,7,6],
                spells: [0,15,14,14,13,13,13,13,12,12,11,11,11,11,10,10,9,9,9,9,8]
            },
            turnUndead: {
                skeleton: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                zombie: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                ghoul: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                wight: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                wraith: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                mummy: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                spectre: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                vampire: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"],
                ghost: ["No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No","No"]
            }
        },
        Cleric: {
            name: "Cleric",
            hitDie: 6,
            spells: [
                "None", "None",
                "1","2","2/1","2/2","2/2/1","3/2/2",
                "3/2/2/1","3/3/2/2","3/3/2/2/1","4/3/3/2/2",
                "4/4/3/2/2/1","4/4/3/3/2/2","4/4/4/3/2/2",
                "4/4/4/3/3/2","5/4/4/3/3/2","5/5/4/3/3/2",
                "5/5/4/4/3/3","6/5/4/4/3/3","6/5/5/4/3/3"
            ],
            thiefSkills: {
                openLocks: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                removeTraps: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                pickPockets: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                moveSilently: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                climbWalls: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                hide: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                listen: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            },
            attackBonus: [0,1,1,2,2,3,3,4,4,5,5,5,6,6,6,7,7,7,8,8,8],
            savingThrows: {
                deathRay: [0,11,10,10,9,9,9,9,8,8,8,8,7,7,7,7,6,6,6,6,5],
                magicWands: [0,12,11,11,10,10,10,10,9,9,9,9,8,8,8,8,7,7,7,7,6],
                paralysis: [0,14,13,13,13,13,12,12,12,12,11,11,11,11,10,10,10,10,9,9,9],
                dragonBreath: [0,16,15,15,15,15,14,14,14,14,13,13,13,13,12,12,12,12,11,11,11],
                spells: [0,15,14,14,14,14,13,13,13,13,12,12,12,12,11,11,11,11,10,10,10]
            },
            turnUndead: {
                skeleton: ["No",13,11,9,7,5,3,2,"T","T","T","D","D","D","D","D","D","D","D","D","D"],
                zombie: ["No",17,15,13,11,9,7,5,3,2,"T","T","T","D","D","D","D","D","D","D","D"],
                ghoul: ["No",19,18,17,15,13,11,9,7,5,3,2,"T","T","D","D","D","D","D","D","D"],
                wight: ["No","No",20,19,18,17,15,13,11,9,7,5,3,2,"T","T","T","D","D","D","D"],
                wraith: ["No","No","No","No",20,19,18,17,15,13,11,9,7,5,3,2,"T","T","T","D","D"],
                mummy: ["No","No","No","No","No","No",20,19,18,17,15,13,11,9,7,5,3,2,"T","T","T"],
                spectre: ["No","No","No","No","No","No","No","No",20,19,18,17,15,13,11,9,7,5,3,2,"T"],
                vampire: ["No","No","No","No","No","No","No","No","No","No",20,19,18,17,15,13,11,9,7,5,3],
                ghost: ["No","No","No","No","No","No","No","No","No","No","No","No",20,19,18,17,15,13,11,9,7]
            }
        }
    };
    this.races = {
        Human: {
            specialAbilities: [
                "+10% experience point bonus."
            ]
        },
        Dwarf: {
            specialAbilities: [
                "Darkvision 60'",
                "Detect slanting passages, traps, shifting walls and new construction on a roll of 1-2 on 1d6"
            ]
        },
        Elf: {
            specialAbilities: [
                "Darkvision 60'",
                "Find secret doors more often than normal (1-2 on 1d6).",
                "Find secret doors on cursory look (1 on 1d6).",
                "Immune to paralyzing attack of ghouls.",
                "Reduce surprise chance by 1 in 1d6."
            ]
        },
        Halfling: {
            specialAbilities: [
                "+1 Attack Bonus with ranged weapons.",
                "+2 AC vs larger than man-sized creatures.",
                "+1 initiative.",
                "90% hide in forest terrain. 70% hide elsewhere."
            ]
        }
    };
    
    this.class = this.classes["None"];
    this.level = 0;
    this.race = "Human";
    this.baseAttackBonus = 0;
    this.hitDieType = 0;
    this.hitPoints = 0;
    this.spells = "None";
    this.specialAbilities = new Array();
    this.setThiefSkills();
    
    this.attributes = {
        Strength: {score: 0, bonus: 0},
        Dexterity: {score: 0, bonus: 0},
        Constitution: {score: 0, bonus: 0},
        Intelligence: {score: 0, bonus: 0},
        Wisdom: {score: 0, bonus: 0},
        Charisma: {score: 0, bonus: 0}
    };
    
    this.savingThrows = {
        deathRay: 0,
        magicWands: 0,
        paralysis: 0,
        dragonBreath: 0,
        spells: 0
    };
    
    this.turnUndead = {
        skeleton: "No",
        zombie: "No",
        ghoul: "No",
        wight: "No",
        wraith: "No",
        mummy: "No",
        spectre: "No",
        vampire: "No",
        ghost: "No"
    };
}

BF_CharacterGenerator.prototype.setClass = function(className) {
    if (className in this.classes) {
        this.class = this.classes[className];
    } else {
        this.class = this.classes["None"];
    }
    this.calculateInfo();
};

BF_CharacterGenerator.prototype.setLevel = function(level) {
    if (level >= 0 && level <= 20) {
        this.level = level;
    } else {
        this.level = 0;
    }
    this.calculateInfo();
};

BF_CharacterGenerator.prototype.setRace = function(race) {
    if (!(race in this.races)) return;
    this.race = race;
    this.specialAbilities = this.races[race].specialAbilities;
    this.determineHitDieType();
};

BF_CharacterGenerator.prototype.calculateInfo = function() {
    this.determineHitDieType();
    this.hitPoints = this.rollHitPoints();
    this.setSpells();
    this.setThiefSkills();
    this.setBaseAttackBonus();
    this.setSavingThrows();
    this.setTurnUndead();
};

BF_CharacterGenerator.prototype.determineHitDieType = function() {
    this.hitDieType = this.class.hitDie;
    if (this.race === "Elf" || this.race === "Halfling") {
        if(this.hitDieType > 6) this.hitDieType = 6;
    }
};

BF_CharacterGenerator.prototype.setBaseAttackBonus = function() {
    this.baseAttackBonus = this.class.attackBonus[this.level];
};

BF_CharacterGenerator.prototype.setThiefSkills = function() {
    this.thiefSkills = {
        openLocks: this.class.thiefSkills.openLocks[this.level],
        removeTraps: this.class.thiefSkills.removeTraps[this.level],
        pickPockets: this.class.thiefSkills.pickPockets[this.level],
        moveSilently: this.class.thiefSkills.moveSilently[this.level],
        climbWalls: this.class.thiefSkills.climbWalls[this.level],
        hide: this.class.thiefSkills.hide[this.level],
        listen: this.class.thiefSkills.listen[this.level]
    };
},

BF_CharacterGenerator.prototype.setSavingThrows = function() {
    this.savingThrows.deathRay = this.class.savingThrows.deathRay[this.level];
    this.savingThrows.magicWands = this.class.savingThrows.magicWands[this.level];
    this.savingThrows.paralysis = this.class.savingThrows.paralysis[this.level];
    this.savingThrows.dragonBreath = this.class.savingThrows.dragonBreath[this.level];
    this.savingThrows.spells = this.class.savingThrows.spells[this.level];
},
        
BF_CharacterGenerator.prototype.setTurnUndead = function() {
    this.turnUndead.skeleton = this.class.turnUndead.skeleton[this.level];
    this.turnUndead.zombie = this.class.turnUndead.zombie[this.level];
    this.turnUndead.ghoul = this.class.turnUndead.ghoul[this.level];
    this.turnUndead.wight = this.class.turnUndead.wight[this.level];
    this.turnUndead.wraith = this.class.turnUndead.wraith[this.level];
    this.turnUndead.mummy = this.class.turnUndead.mummy[this.level];
    this.turnUndead.spectre = this.class.turnUndead.spectre[this.level];
    this.turnUndead.vampire = this.class.turnUndead.vampire[this.level];
    this.turnUndead.ghost = this.class.turnUndead.ghost[this.level];
},
        
BF_CharacterGenerator.prototype.setSpells = function() {
    this.spells = this.class.spells[this.level];
},

BF_CharacterGenerator.prototype.rollHitPoints = function() {
    var value = 0;
    
    for (x = 1; x <= this.level; ++x) {
        value += this.rollDie(this.hitDieType);
    }
    return value;
};

BF_CharacterGenerator.prototype.setAttribute = function(attribute, value) {
    if (!(attribute in this.attributes)) return;
    
    if (value >= 3 && value <= 18) {
        this.attributes[attribute].score = value;
    } else {
        this.attributes[attribute].score = 0;
    }
    this.attributes[attribute].bonus = this.abilityBonuses[this.attributes[attribute].score];
};

BF_CharacterGenerator.prototype.generateScores = function() {
    this.setAttribute("Strength", this.generateAttribute());
    this.setAttribute("Dexterity", this.generateAttribute());
    this.setAttribute("Constitution", this.generateAttribute());
    this.setAttribute("Wisdom", this.generateAttribute());
    this.setAttribute("Intelligence", this.generateAttribute());
    this.setAttribute("Charisma", this.generateAttribute());
};

BF_CharacterGenerator.prototype.generateAttribute = function() {
    var value = this.rollDie(6) + this.rollDie(6) + this.rollDie(6);
    return value;
};

BF_CharacterGenerator.prototype.rollDie = function(sides) {
    if (sides === 0) return 0;
    value = Math.floor((Math.random() * sides) + 1);
    return value;
};

BF_CharacterGenerator.prototype.getMeleeAttackBonus = function() {
    return this.baseAttackBonus + this.attributes.Strength.bonus;
};

BF_CharacterGenerator.prototype.getRangedAttackBonus = function() {
    var result = 0;
    result = this.baseAttackBonus + this.attributes.Dexterity.bonus;
    if (this.race === "Halfling") result += 1;
    return result;
};

BF_CharacterGenerator.prototype.getAC = function() {
    return 10 + this.attributes.Dexterity.bonus;
};

BF_CharacterGenerator.prototype.getDeathRaySave = function() {
    var result = this.savingThrows.deathRay;
    if(this.race === "Dwarf" || this.race === "Halfling") result -= 4;
    return result;
};

BF_CharacterGenerator.prototype.getMagicWandsSave = function() {
    var result = this.savingThrows.magicWands;
    if(this.race === "Dwarf" || this.race === "Halfling") result -= 4;
    return result;
};

BF_CharacterGenerator.prototype.getParalysisSave = function() {
    var result = this.savingThrows.paralysis;
    
    if(this.race === "Dwarf" || this.race === "Halfling") result -= 4;
    if(this.race === "Elf") result -= 1;
    
    return result;
};

BF_CharacterGenerator.prototype.getDragonBreathSave = function() {
    var result = this.savingThrows.dragonBreath;
    if(this.race === "Dwarf" || this.race === "Halfling") result -= 3;
    return result;
};

BF_CharacterGenerator.prototype.getSpellsSave = function() {
    var result = this.savingThrows.spells;
    
    if(this.race === "Halfling") result -= 4;
    if(this.race === "Dwarf") result -= 3;
    if(this.race === "Elf") result -= 2;
    
    return result;
};
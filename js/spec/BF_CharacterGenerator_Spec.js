describe("Character Generator", function() {
	var chargen;
	
	beforeEach(function() {
		chargen = new BF_CharacterGenerator();
	});
	
	it("should accept valid character class selections", function() {
        chargen.setClass("Fighter");
	expect(chargen.class["name"]).toEqual("Fighter");
        chargen.setClass("Cleric");
        expect(chargen.class["name"]).toEqual("Cleric");
        chargen.setClass("Thief");
        expect(chargen.class["name"]).toEqual("Thief");
        chargen.setClass("Mage");
        expect(chargen.class["name"]).toEqual("Mage");
        chargen.setClass("Blork");
        expect(chargen.class["name"]).toEqual("Mage");
        chargen.setClass("");
        expect(chargen.class["name"]).toEqual("Mage");
	});
    
    it("should accept valid character level selections", function() {
        chargen.setLevel(1);
		expect(chargen.level).toEqual(1);
        chargen.setLevel(15);
		expect(chargen.level).toEqual(15);
        chargen.setLevel(20);
		expect(chargen.level).toEqual(20);
        chargen.setLevel(-1);
		expect(chargen.level).toEqual(0);
        chargen.setLevel(0);
		expect(chargen.level).toEqual(0);
	});
    
    it("should accept valid race selections", function() {
        chargen.setRace("Dwarf");
        expect(chargen.race).toEqual("Dwarf");
        expect(chargen.specialAbilities[0]).toEqual("Darkvision 60'");
        expect(chargen.specialAbilities[1]).toEqual("Detect slanting passages, traps, shifting walls and new construction on a roll of 1-2 on 1d6");
        chargen.setRace("Elf");
        expect(chargen.race).toEqual("Elf");
        expect(chargen.specialAbilities[0]).toEqual("Darkvision 60'");
        expect(chargen.specialAbilities[1]).toEqual("Find secret doors more often than normal (1-2 on 1d6).");
        expect(chargen.specialAbilities[2]).toEqual("Find secret doors on cursory look (1 on 1d6).");
        expect(chargen.specialAbilities[3]).toEqual("Immune to paralyzing attack of ghouls.");
        expect(chargen.specialAbilities[4]).toEqual("Reduce surprise chance by 1 in 1d6.");
        chargen.setRace("Halfling");
        expect(chargen.race).toEqual("Halfling");
        expect(chargen.specialAbilities[0]).toEqual("+1 Attack Bonus with ranged weapons.");
        expect(chargen.specialAbilities[1]).toEqual("+2 AC vs larger than man-sized creatures.");
        expect(chargen.specialAbilities[2]).toEqual("+1 initiative.");
        expect(chargen.specialAbilities[3]).toEqual("90% hide in forest terrain. 70% hide elsewhere.");
        chargen.setRace("Human");
        expect(chargen.race).toEqual("Human");
        expect(chargen.specialAbilities[0]).toEqual("+10% experience point bonus.");
        chargen.setRace("Blark");
        expect(chargen.race).toEqual("Human");
        expect(chargen.specialAbilities[0]).toEqual("+10% experience point bonus.");
    });
    
    it("should accept valid attribute selections", function() {
        chargen.setAttribute("Strength", 3);
        expect(chargen.attributes.Strength.score).toEqual(3);
        expect(chargen.attributes.Strength.bonus).toEqual(-3);
        chargen.setAttribute("Strength", 18);
        expect(chargen.attributes.Strength.score).toEqual(18);
        expect(chargen.attributes.Strength.bonus).toEqual(3);
        chargen.setAttribute("Strength", -1);
        expect(chargen.attributes.Strength.score).toEqual(0);
        expect(chargen.attributes.Strength.bonus).toEqual(0);
        chargen.setAttribute("Strength", 19);
        expect(chargen.attributes.Strength.score).toEqual(0);
        expect(chargen.attributes.Strength.bonus).toEqual(0);
        chargen.setAttribute("Blork", 12);
        expect(chargen.attributes.Strength.score).toEqual(0);
        expect(chargen.attributes.Strength.bonus).toEqual(0);
        chargen.setAttribute("Dexterity", 13);
        expect(chargen.attributes.Dexterity.score).toEqual(13);
        expect(chargen.attributes.Dexterity.bonus).toEqual(1);
        chargen.setAttribute("Wisdom", 8);
        expect(chargen.attributes.Wisdom.score).toEqual(8);
        expect(chargen.attributes.Wisdom.bonus).toEqual(-1);
        chargen.setAttribute("Constitution", 16);
        expect(chargen.attributes.Constitution.score).toEqual(16);
        expect(chargen.attributes.Constitution.bonus).toEqual(2);
        chargen.setAttribute("Charisma", 4);
        expect(chargen.attributes.Charisma.score).toEqual(4);
        expect(chargen.attributes.Charisma.bonus).toEqual(-2);
        chargen.setAttribute("Intelligence", 3);
        expect(chargen.attributes.Intelligence.score).toEqual(3);
        expect(chargen.attributes.Intelligence.bonus).toEqual(-3);
    });
    
    it("should set the proper hit die type when class selected.", function() {
        chargen.setClass("Fighter");
        expect(chargen.hitDieType).toEqual(8);
        chargen.setRace("Elf");
        expect(chargen.hitDieType).toEqual(6);
        chargen.setRace("Dwarf");
        expect(chargen.hitDieType).toEqual(8);
        chargen.setRace("Halfling");
        expect(chargen.hitDieType).toEqual(6);
        chargen.setClass("Mage"); //Halflings cannot be Mages.
        expect(chargen.hitDieType).toEqual(6);
        chargen.setClass("Thief");
        expect(chargen.hitDieType).toEqual(6);
        chargen.setClass("Cleric");
        expect(chargen.hitDieType).toEqual(6);
    });
    
    it("should generate hit points when level is selected.", function() {
        chargen.setClass("Fighter");
        chargen.setLevel(3);
        expect(chargen.hitPoints).toBeLessThan(25);
        expect(chargen.hitPoints).toBeGreaterThan(2);
        chargen.setLevel(5);
        expect(chargen.hitPoints).toBeLessThan(41);
        expect(chargen.hitPoints).toBeGreaterThan(4);
        chargen.setClass("Mage");
        chargen.setLevel(3);
        expect(chargen.hitPoints).toBeLessThan(13);
        expect(chargen.hitPoints).toBeGreaterThan(2);
        chargen.setLevel(5);
        expect(chargen.hitPoints).toBeLessThan(21);
        expect(chargen.hitPoints).toBeGreaterThan(4);
        chargen.setClass("Cleric");
        chargen.setLevel(3);
        expect(chargen.hitPoints).toBeLessThan(19);
        expect(chargen.hitPoints).toBeGreaterThan(2);
        chargen.setLevel(5);
        expect(chargen.hitPoints).toBeLessThan(31);
        expect(chargen.hitPoints).toBeGreaterThan(4);
        chargen.setClass("Thief");
        chargen.setLevel(3);
        expect(chargen.hitPoints).toBeLessThan(19);
        expect(chargen.hitPoints).toBeGreaterThan(2);
        chargen.setLevel(5);
        expect(chargen.hitPoints).toBeLessThan(31);
        expect(chargen.hitPoints).toBeGreaterThan(4);
    });
    
    it("should set the correct number of spells per level when class and level are selected.", function() {
        chargen.setClass("Mage");
        chargen.setLevel(3);
        expect(chargen.spells).toEqual("2/1");
        chargen.setLevel(7);
        expect(chargen.spells).toEqual("3/2/2/1");
        chargen.setClass("Cleric");
        expect(chargen.spells).toEqual("3/2/2");
        chargen.setLevel(14);
        expect(chargen.spells).toEqual("4/4/4/3/2/2");
        chargen.setClass("Mage");
        expect(chargen.spells).toEqual("4/4/4/3/3/2");
    });
    
    it("should set the thief skills", function() {
        chargen.setClass("Fighter");
        chargen.setLevel(4);
        expect(chargen.thiefSkills.removeTraps).toEqual(0);
        chargen.setClass("Thief");
        expect(chargen.thiefSkills.removeTraps).toEqual(35);
        chargen.setLevel(20);
        expect(chargen.thiefSkills.hide).toEqual(73);
    });
    
    it("should generate the attributes and bonuses.", function() {
        chargen.generateScores();
        expect(chargen.attributes.Charisma.score).toBeLessThan(19);
        expect(chargen.attributes.Charisma.score).toBeGreaterThan(2);
        expect(chargen.attributes.Charisma.bonus).toBeLessThan(4);
        expect(chargen.attributes.Charisma.bonus).toBeGreaterThan(-4);
        expect(chargen.attributes.Strength.score).toBeLessThan(19);
        expect(chargen.attributes.Strength.score).toBeGreaterThan(2);
        expect(chargen.attributes.Strength.bonus).toBeLessThan(4);
        expect(chargen.attributes.Strength.bonus).toBeGreaterThan(-4);
        expect(chargen.attributes.Wisdom.score).toBeLessThan(19);
        expect(chargen.attributes.Wisdom.score).toBeGreaterThan(2);
        expect(chargen.attributes.Wisdom.bonus).toBeLessThan(4);
        expect(chargen.attributes.Wisdom.bonus).toBeGreaterThan(-4);
        expect(chargen.attributes.Intelligence.score).toBeLessThan(19);
        expect(chargen.attributes.Intelligence.score).toBeGreaterThan(2);
        expect(chargen.attributes.Intelligence.bonus).toBeLessThan(4);
        expect(chargen.attributes.Intelligence.bonus).toBeGreaterThan(-4);
        expect(chargen.attributes.Constitution.score).toBeLessThan(19);
        expect(chargen.attributes.Constitution.score).toBeGreaterThan(2);
        expect(chargen.attributes.Constitution.bonus).toBeLessThan(4);
        expect(chargen.attributes.Constitution.bonus).toBeGreaterThan(-4);
        expect(chargen.attributes.Dexterity.score).toBeLessThan(19);
        expect(chargen.attributes.Dexterity.score).toBeGreaterThan(2);
        expect(chargen.attributes.Dexterity.bonus).toBeLessThan(4);
        expect(chargen.attributes.Dexterity.bonus).toBeGreaterThan(-4);
        console.log(chargen.attributes);
    });
    
    it("should set base attack bonuses.", function() {
        chargen.setClass("Fighter");
        chargen.setLevel(8);
        expect(chargen.baseAttackBonus).toEqual(6);
        chargen.setClass("Cleric");
        expect(chargen.baseAttackBonus).toEqual(4);
        chargen.setClass("Mage");
        expect(chargen.baseAttackBonus).toEqual(3);
    });
    
    it("should get correct calculated attack bonus", function() {
        chargen.setClass("Fighter");
        chargen.setLevel(1);
        chargen.setRace("Human");
        chargen.setAttribute("Strength", 12);
        chargen.setAttribute("Dexterity", 12);
        expect(chargen.getMeleeAttackBonus()).toEqual(1);
        expect(chargen.getRangedAttackBonus()).toEqual(1);
        chargen.setLevel(12);
        expect(chargen.getMeleeAttackBonus()).toEqual(7);
        expect(chargen.getRangedAttackBonus()).toEqual(7);
        chargen.setAttribute("Strength", 18);
        expect(chargen.getMeleeAttackBonus()).toEqual(10);
        expect(chargen.getRangedAttackBonus()).toEqual(7);
        chargen.setAttribute("Dexterity", 18);
        expect(chargen.getRangedAttackBonus()).toEqual(10);
        chargen.setRace("Halfling");
        expect(chargen.getRangedAttackBonus()).toEqual(11);
        chargen.setClass("Cleric");
        chargen.setLevel(20);
        expect(chargen.getMeleeAttackBonus()).toEqual(11);
        expect(chargen.getRangedAttackBonus()).toEqual(12);
        chargen.setClass("Mage");
        expect(chargen.getMeleeAttackBonus()).toEqual(11);
        expect(chargen.getRangedAttackBonus()).toEqual(12);
        chargen.setRace("Elf");
        chargen.setClass("Mage");
        expect(chargen.getMeleeAttackBonus()).toEqual(10);
        expect(chargen.getRangedAttackBonus()).toEqual(10);
    }),
    
    it("should get correct calculated AC", function() {
        chargen.setClass("Fighter");
        chargen.setLevel(1);
        chargen.setRace("Human");
        chargen.setAttribute("Strength", 12);
        chargen.setAttribute("Dexterity", 12);
        expect(chargen.getAC()).toEqual(10);
        chargen.setAttribute("Dexterity", 18);
        expect(chargen.getAC()).toEqual(13);
        chargen.setAttribute("Dexterity", 3);
        expect(chargen.getAC()).toEqual(7);
    });
    
    it("should set saving throws.", function() {
        chargen.setClass("Fighter");
        chargen.setLevel(1);
        expect(chargen.savingThrows.deathRay).toEqual(12);
        chargen.setClass("Thief");
        expect(chargen.savingThrows.deathRay).toEqual(13);
        chargen.setLevel(20);
        expect(chargen.savingThrows.dragonBreath).toEqual(6);
        chargen.setClass("Mage");
        expect(chargen.savingThrows.dragonBreath).toEqual(11);
        chargen.setClass("Cleric");
        chargen.setLevel(15);
        expect(chargen.savingThrows.magicWands).toEqual(8);
    });
    
    it("should get correct calculated saving throws", function() {
        chargen.setClass("Fighter");
        chargen.setLevel(1);
        chargen.setRace("Human");
        expect(chargen.getDeathRaySave()).toEqual(12);
        expect(chargen.getMagicWandsSave()).toEqual(13);
        expect(chargen.getParalysisSave()).toEqual(14);
        expect(chargen.getDragonBreathSave()).toEqual(15);
        expect(chargen.getSpellsSave()).toEqual(17);
        chargen.setRace("Dwarf");
        expect(chargen.getDeathRaySave()).toEqual(8);
        expect(chargen.getMagicWandsSave()).toEqual(9);
        expect(chargen.getParalysisSave()).toEqual(10);
        expect(chargen.getDragonBreathSave()).toEqual(12);
        expect(chargen.getSpellsSave()).toEqual(14);
        chargen.setRace("Elf");
        expect(chargen.getDeathRaySave()).toEqual(12);
        expect(chargen.getMagicWandsSave()).toEqual(13);
        expect(chargen.getParalysisSave()).toEqual(13);
        expect(chargen.getDragonBreathSave()).toEqual(15);
        expect(chargen.getSpellsSave()).toEqual(15);
        chargen.setRace("Halfling");
        expect(chargen.getDeathRaySave()).toEqual(8);
        expect(chargen.getMagicWandsSave()).toEqual(9);
        expect(chargen.getParalysisSave()).toEqual(10);
        expect(chargen.getDragonBreathSave()).toEqual(12);
        expect(chargen.getSpellsSave()).toEqual(13);
    });
    
    it("should set the turning undead table", function() {
        chargen.setClass("Fighter");
        chargen.setLevel(1);
        expect(chargen.turnUndead.skeleton).toEqual("No");
        chargen.setClass("Mage");
        expect(chargen.turnUndead.skeleton).toEqual("No");
        chargen.setClass("Thief");
        expect(chargen.turnUndead.skeleton).toEqual("No");
        chargen.setClass("Cleric");
        expect(chargen.turnUndead.skeleton).toEqual(13);
        expect(chargen.turnUndead.mummy).toEqual("No");
        chargen.setLevel(20);
        expect(chargen.turnUndead.wraith).toEqual("D");
        expect(chargen.turnUndead.spectre).toEqual("T");
        expect(chargen.turnUndead.ghost).toEqual(7);
    });
});

describe("Random Number Generator", function() {
    var chargen;
	
	beforeEach(function() {
		chargen = new BF_CharacterGenerator();
	});
    
    it("should only produce numbers between 3 and 18 for attributes", function() {
        var temp;
        var values = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
        for(var x = 0; x < 10001; ++x) {
            chargen.generateAttribute("Strength");
            values[chargen.attributes.Strength.score - 1] += 1;
            expect(chargen.attributes.Strength.score).toBeLessThan(19);
            expect(chargen.attributes.Strength.score).toBeGreaterThan(2);
        }
        console.log(values);
    });
    
    it("should roll dice of differing sizes.", function() {
        var temp;
        var values = new Array(0,0,0,0,0,0);
        for(var x = 0; x < 10001; ++x) {
            temp = chargen.rollDie(6);
            values[temp - 1] += 1;
            expect(temp).toBeLessThan(7);
            expect(temp).toBeGreaterThan(0);
        }
        console.log(values);
        
        values = new Array(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
        for(var x = 0; x < 10001; ++x) {
            temp = chargen.rollDie(20);
            values[temp - 1] += 1;
            expect(temp).toBeLessThan(21);
            expect(temp).toBeGreaterThan(0);
        }
        console.log(values);
    });
});
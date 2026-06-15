import { typeChart } from '../data/pokemon/typeChart.js';
import { playSound } from '../../file/audio.js';

export function useMove(move, user, foe, bonusPower, critical) {
    const level = user.lvl;
    let power = move.power + bonusPower;

    if (user.lvl > foe.lvl && move.bonusLevel) power *= 2;

    let isPhysical = move.class === 'physical';
    let attack = isPhysical ? user.stat.atk : user.stat.spa;
    let defense = isPhysical ? foe.stat.def : foe.stat.spd;

    let stab = user.type.some(t => t.name[0] === move.type.name[0]) ? 1.5 : 1;
    let typeEffectiveness = getTypeEffectiveness(move.type, foe.type);

    if (typeEffectiveness > 1 || critical > 1) playSound('superEffective', 'effect');
    else if (typeEffectiveness == 1) playSound('effective', 'effect');
    else playSound('noEffective', 'effect');

    if (move.typeFoeBonus) {
        foe.type.forEach(type => {
            if (type.name[0] == move.typeFoeBonus.type) typeEffectiveness = move.typeFoeBonus.multiplier; 
        })
    }

    if (move.foulPlay) attack = foe.stat['atk'];
    if (move.electroBall) attack = user.stat['spe'];
    if (move.randomPower) power = Math.floor( power * (Math.random() * (move.randomPower[1] - move.randomPower[0]) + move.randomPower[0]));

    const random = (Math.random() * (100 - 85) + 85) / 100; 
    const baseDamage = (((((2 * level) / 5) + 2) * power * attack / defense) / 50) + 2;
    const finalDamage = Math.round(baseDamage * stab * typeEffectiveness * critical * random);  

    return finalDamage;
}

function getTypeEffectiveness(moveType, foeTypes) {
    let multiplier = 1;
    const moveTypeName = moveType?.name[0] ?? moveType;

    foeTypes.forEach(type => {
        const foeTypeName = type?.name[0] ?? type;
        const effect = typeChart[moveTypeName]?.[foeTypeName];
        if (effect !== undefined) {
            multiplier *= effect;
        }
    });

    return multiplier;
}
const dataC = require("./characters.json");
const dataP = require("./powers.json");
const Character = require("../models/Character");
const Power = require("../models/Power");

const characterData = dataC.map(item => {
  const character = {
    Name: item.Name,
    Alignment: item.Alignment,
    Gender: item.Gender,
    Race: item.Race,
    Publisher: item.Publisher,
    Powers: item.Powers
  };
  return character;
});

Character.remove({}).then(() => {
  Character.collection
    .insert(characterData)
    .then(characters => {
      console.log(characters);
    })
    .catch(err => {
      console.log(err);
    });
});

const powerData2 = dataP.map(character => {
  let newCharacter = character;
  Object.keys(character).map(powers => {
    if (newCharacter[powers] == false) {
      //   console.log(newCharacter[powers]);
      delete newCharacter[powers];
    }
  });
  return newCharacter;
});

// console.log(powerData2);

Power.remove({}).then(() => {
  Power.collection
    .insert(powerData2)
    .then(powers => {
      console.log(powers);
    })
    .catch(err => {
      console.log(err);
    });
});

// const powerData = dataP.map(item => {
//   const power = {
//     Name: item.Name,
//     Agility: item.Agility,
//     AcceleratedHealing: item.AcceleratedHealing,
//     LanternPowerRing: item.LanternPowerRing,
//     DimensionalAwareness: item.DimensionalAwareness,
//     ColdResistance: item.ColdResistance,
//     Durability: item.Durability,
//     Stealth: item.Stealth,
//     EnergyAbsorption: item.EnergyAbsorption,
//     Flight: item.Flight,
//     DangerSense: item.DangerSense,
//     UnderwaterBreathing: item.UnderwaterBreathing,
//     Marksmanship: item.Marksmanship,
//     WeaponsMaster: item.WeaponsMaster,
//     PowerAugmentation: item.PowerAugmentation,
//     AnimalAttributes: item.AnimalAttributes,
//     Longevity: item.Longevity,
//     Intelligence: item.Intelligence,
//     SuperStrength: item.SuperStrength,
//     Cryokinesis: item.Cryokinesis,
//     Telepathy: item.Telepathy,
//     EnergyArmor: item.EnergyArmor,
//     EnergyBlasts: item.EnergyBlasts,
//     Duplication: item.Duplication,
//     SizeChanging: item.SizeChanging,
//     DensityControl: item.DensityControl,
//     Stamina: item.Stamina,
//     AstralTravel: item.AstralTravel,
//     AudioControl: item.AudioControl,
//     Dexterity: item.Dexterity,
//     Omnitrix: item.Omnitrix,
//     SuperSpeed: item.SuperSpeed,
//     Possession: item.Possession,
//     AnimalOrientedPowers: item.AnimalOrientedPowers,
//     WeaponBasedPowers: item.WeaponBasedPowers,
//     Electrokinesis: item.Electrokinesis,
//     DarkforceManipulation: item.DarkforceManipulation,
//     DeathTouch: item.DeathTouch,
//     Teleportation: item.Teleportation,
//     EnhancedSenses: item.EnhancedSenses,
//     Telekinesis: item.Telekinesis,
//     EnergyBeams: item.EnergyBeams,
//     Magic: item.Magic,
//     Hyperkinesis: item.Hyperkinesis,
//     Jump: item.Jump,
//     Clairvoyance: item.Clairvoyance,
//     DimensionalTravel: item.DimensionalTravel,
//     PowerSense: item.PowerSense,
//     Shapeshifting: item.Shapeshifting,
//     PeakHumanCondition: item.PeakHumanCondition,
//     Immortality: item.Immortality,
//     Camouflage: item.Camouflage,
//     ElementControl: item.ElementControl,
//     Phasing: item.Phasing,
//     AstralProjection: item.AstralProjection,
//     ElectricalTransport: item.ElectricalTransport,
//     FireControl: item.FireControl,
//     Projection: item.Projection,
//     Summoning: item.Summoning,
//     EnhancedMemory: item.EnhancedMemory,
//     Reflexes: item.Reflexes,
//     Invulnerability: item.Invulnerability,
//     EnergyConstructs: item.EnergyConstructs,
//     ForceFields: item.ForceFields,
//     SelfSustenance: item.SelfSustenance,
//     AntiGravity: item.AntiGravity,
//     Empathy: item.Empathy,
//     PowerNullifier: item.PowerNullifier,
//     RadiationControl: item.RadiationControl,
//     PsionicPowers: item.PsionicPowers,
//     Elasticity: item.Elasticity,
//     SubstanceSecretion: item.SubstanceSecretion,
//     ElementalTransmogrification: item.ElementalTransmogrification,
//     Technopath: item.Technopath,
//     PhotographicReflexes: item.PhotographicReflexes,
//     SeismicPower: item.SeismicPower,
//     Animation: item.Animation,
//     Precognition: item.Precognition,
//     MindControl: item.MindControl,
//     FireResistance: item.FireResistance,
//     PowerAbsorption: item.PowerAbsorption,
//     EnhancedHearing: item.EnhancedHearing,
//     NovaForce: item.NovaForce,
//     Insanity: item.Insanity,
//     Hypnokinesis: item.Hypnokinesis,
//     AnimalControl: item.AnimalControl,
//     NaturalArmor: item.NaturalArmor,
//     Intangibility: item.Intangibility,
//     EnhancedSight: item.EnhancedSight,
//     MolecularManipulation: item.MolecularManipulation,
//     HeatGeneration: item.HeatGeneration,
//     Adaptation: item.Adaptation,
//     Gliding: item.Gliding,
//     PowerSuit: item.PowerSuit,
//     MindBlast: item.MindBlast,
//     ProbabilityManipulation: item.ProbabilityManipulation,
//     GravityControl: item.GravityControl,
//     Regeneration: item.Regeneration,
//     LightControl: item.LightControl,
//     Echolocation: item.Echolocation,
//     Levitation: item.Levitation,
//     ToxinDiseaseControl: item.ToxinDiseaseControl,
//     Banish: item.Banish,
//     EnergyManipulation: item.EnergyManipulation,
//     HeatResistance: item.HeatResistance,
//     NaturalWeapons: item.NaturalWeapons,
//     TimeTravel: item.TimeTravel,
//     EnhancedSmell: item.EnhancedSmell,
//     Illusions: item.Illusions,
//     Thirstokinesis: item.Thirstokinesis,
//     HairManipulation: item.HairManipulation,
//     Illumination: item.Illumination,
//     Omnipotent: item.Omnipotent,
//     Cloaking: item.Cloaking,
//     ChangingArmor: item.ChangingArmor,
//     PowerCosmic: item.PowerCosmic,
//     Biokinesis: item.Biokinesis,
//     WaterControl: item.WaterControl,
//     RadiationImmunity: item.RadiationImmunity,
//     TelescopicVision: item.TelescopicVision,
//     ToxinDiseaseResistance: item.ToxinDiseaseResistance,
//     SpatialAwareness: item.SpatialAwareness,
//     EnergyResistance: item.EnergyResistance,
//     TelepathyResistance: item.TelepathyResistance,
//     MolecularCombustion: item.MolecularCombustion,
//     Omnilingualism: item.Omnilingualism,
//     PortalCreation: item.PortalCreation,
//     Magnetism: item.Magnetism,
//     MindControlResistance: item.MindControlResistance,
//     PlantControl: item.PlantControl,
//     Sonar: item.Sonar,
//     SonicScream: item.SonicScream,
//     TimeManipulation: item.TimeManipulation,
//     EnhancedTouch: item.EnhancedTouch,
//     MagicResistance: item.MagicResistance,
//     Invisibility: item.Invisibility,
//     SubMariner: item.SubMariner,
//     RadiationAbsorption: item.RadiationAbsorption,
//     IntuitiveAptitude: item.IntuitiveAptitude,
//     MicroscopicVision: item.MicroscopicVision,
//     Melting: item.Melting,
//     WindControl: item.WindControl,
//     SuperBreath: item.SuperBreath,
//     Wallcrawling: item.Wallcrawling,
//     NightVision: item.NightVision,
//     InfraredVision: item.InfraredVision,
//     GrimReaping: item.GrimReaping,
//     MatterAbsorption: item.MatterAbsorption,
//     TheForce: item.TheForce,
//     Resurrection: item.Resurrection,
//     Terrakinesis: item.Terrakinesis,
//     HeatVision: item.HeatVision,
//     Vitakinesis: item.Vitakinesis,
//     RadarSense: item.RadarSense,
//     QwardianPowerRing: item.QwardianPowerRing,
//     WeatherControl: item.WeatherControl,
//     XrayVision: item.XrayVision,
//     ThermalVision: item.ThermalVision,
//     WebCreation: item.WebCreation,
//     RealityWarping: item.RealityWarping,
//     OdinForce: item.OdinForce,
//     SymbioteCostume: item.SymbioteCostume,
//     SpeedForce: item.SpeedForce,
//     PhoenixForce: item.PhoenixForce,
//     MolecularDissipation: item.MolecularDissipation,
//     CryoVision: item.CryoVision,
//     Omnipresent: item.Omnipresent,
//     Omniscient: item.Omniscient
//   };
//   return power;
// });

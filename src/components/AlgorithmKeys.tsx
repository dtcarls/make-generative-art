const algorithmKeys = {
  "70s Pop Ghost Bonus Pack 👻": "70s_pop_ghost_bonus_pack_👻.js",
  "70s Pop Series Two": "70s_pop_series_two.js",
  Abstraction: "abstraction.js",
  "Aerial View": "aerial_view.js",
  "Alien Clock": "alien_clock.js",
  "Alien Insects": "alien_insects.js",
  Andradite: "andradite.js",
  Antennas: "antennas.js",
  Apparitions: "apparitions.js",
  Archetype: "archetype.js",
  Asterisms: "asterisms.js",
  "Breathe You": "breathe_you.js",
  Brushpops: "brushpops.js",
  CENTURY: "century.js",
  Calendart: "calendart.js",
  CatBlocks: "catblocks.js",
  Cells: "cells.js",
  "Chromie Squiggle": "chromie_squiggle.js",
  "Color Magic Planets": "color_magic_planets.js",
  "Color Study": "color_study.js",
  CryptoGodKing: "cryptogodking.js",
  Cryptoblots: "cryptoblots.js",
  "Cyber Cities": "cyber_cities.js",
  "Dear Hash,": "dear_hash,.js",
  Divisions: "divisions.js",
  "Dot Grid": "dot_grid.js",
  "Dot Matrix Gradient Study": "dot_matrix_gradient_study.js",
  Dreams: "dreams.js",
  "Dynamic Slices": "dynamic_slices.js",
  Eccentrics: "eccentrics.js",
  Ecumenopolis: "ecumenopolis.js",
  Elementals: "elementals.js",
  "Elevated Deconstructions": "elevated_deconstructions.js",
  Empyrean: "empyrean.js",
  Enchiridion: "enchiridion.js",
  EnergySculpture: "energysculpture.js",
  Ensō: "ensō.js",
  "Event Horizon Sunset (Series C)": "event_horizon_sunset_(series_c).js",
  "Fake Internet Money": "fake_internet_money.js",
  Fidenza: "fidenza.js",
  Flowers: "flowers.js",
  Frammenti: "frammenti.js",
  Gazettes: "gazettes.js",
  "Gen 2": "gen_2.js",
  "Gen 3": "gen_3.js",
  Gizmobotz: "gizmobotz.js",
  "Good Vibrations": "good_vibrations.js",
  "Gravity 12": "gravity_12.js",
  "Gravity Grid": "gravity_grid.js",
  Hashtractors: "hashtractors.js",
  Hieroglyphs: "hieroglyphs.js",
  "High Tide": "high_tide.js",
  HyperHash: "hyperhash.js",
  "I Saw It in a Dream": "i_saw_it_in_a_dream.js",
  Incantation: "incantation.js",
  Inspirals: "inspirals.js",
  Labyrometry: "labyrometry.js",
  "LeWitt Generator Generator": "lewitt_generator_generator.js",
  "Libertad Parametrizada": "libertad_parametrizada.js",
  "Low Tide": "low_tide.js",
  Neighborhood: "neighborhood.js",
  Nucleus: "nucleus.js",
  "Octo Garden": "octo_garden.js",
  "Ode to Roy": "ode_to_roy.js",
  "Organized Disruption": "organized_disruption.js",
  "Origami Dream": "origami_dream.js",
  Orthogone: "orthogone.js",
  "Panelscape 🅰🅱": "panelscape_🅰🅱.js",
  "Paper Armada": "paper_armada.js",
  "Patchwork Saguaros": "patchwork_saguaros.js",
  Pathfinders: "pathfinders.js",
  "Patterns of Life": "patterns_of_life.js",
  Petri: "petri.js",
  Portal: "portal.js",
  PrimiDance: "primidance.js",
  Radiance: "radiance.js",
  Rapture: "rapture.js",
  Return: "return.js",
  Rhythm: "rhythm.js",
  Rinascita: "rinascita.js",
  Ringers: "ringers.js",
  "Scribbled Boundaries": "scribbled_boundaries.js",
  Sentience: "sentience.js",
  Sigils: "sigils.js",
  "Space Debris [m'aider]": "space_debris_[m'aider].js",
  "Space Debris [ravaged]": "space_debris_[ravaged].js",
  "Space Debris [warning]": "space_debris_[warning].js",
  Spaghettification: "spaghettification.js",
  "Speckled Summits": "speckled_summits.js",
  "Star Flower": "star_flower.js",
  "Stipple Sunsets": "stipple_sunsets.js",
  Stroming: "stroming.js",
  Subscapes: "subscapes.js",
  Synapses: "synapses.js",
  "Talking Blocks": "talking_blocks.js",
  Tangled: "tangled.js",
  "The Blocks of Art": "the_blocks_of_art.js",
  "The Opera": "the_opera.js",
  Timepiece: "timepiece.js",
  Traversals: "traversals.js",
  Trossets: "trossets.js",
  Unigrids: "unigrids.js",
  "Unknown Signals": "unknown_signals.js",
  "Variant Plan": "variant_plan.js",
  "View Card": "view_card.js",
  "Watercolor Dreams": "watercolor_dreams.js",
  "Wave Schematics": "wave_schematics.js",
  "[Dis]entanglement": "[dis]entanglement.js",
  autoRAD: "autorad.js",
  "glitch crystal monsters": "glitch_crystal_monsters.js",
  planets: "planets.js",
  "sail-o-bots": "sail-o-bots.js",
};

const getValue = (key: any) => (obj: any) => obj[key];

export const getAlgorithmValue = (key: string) => {
  return getValue(key)(algorithmKeys);
};

export const AlgorithmKeys = () => {
  return Object.keys(algorithmKeys);
};

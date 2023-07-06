ServerEvents.recipes(event => {

    // All Recipe Removal
    let toRemove = [
        //Removed Recipes
        {output: 'enigmaticgraves:grave_finder'},
        {output: 'ftbquests:barrier'},
        {output: 'gildedarmor:gilded_enderite_helmet'},
        {output: 'gildedarmor:gilded_enderite_chestplate'},
        {output: 'gildedarmor:gilded_enderite_leggings'},
        {output: 'gildedarmor:gilded_enderite_boots'},
        {output: 'ftbquests:missing_item'},
        {output: 'ftbquests:stage_barrier'},
        {output: 'ftbquests:detector'},
        {output: 'ftbquests:loot_crate_opener'},
        {output: 'ftbquests:screen_1'},
        {output: 'ftbquests:screen_3'},
        {output: 'ftbquests:screen_5'},
        {output: 'ftbquests:screen_7'},
        {output: 'ftbquests:custom_icon'},
        {output: 'itemfilters:always_true'},
        {output: 'itemfilters:always_false'},
        {output: 'itemfilters:or'},
        {output: 'itemfilters:and'},
        {output: 'itemfilters:not'},
        {output: 'itemfilters:xor'},
        {output: 'itemfilters:tag'},
        {output: 'itemfilters:mod'},
        {output: 'itemfilters:item_group'},
        {output: 'itemfilters:id_regex'},
        {output: 'itemfilters:damage'},
        {output: 'itemfilters:block'},
        {output: 'itemfilters:max_count'},
        {output: 'itemfilters:strong_nbt'},
        {output: 'itemfilters:weak_nbt'},
        {output: 'itemfilters:custom'},
        {output: 'prefab:item_swift_blade_wood'},
        {output: 'prefab:item_swift_blade_gold'},
        {output: 'prefab:item_sickle_wood'},
        {output: 'prefab:item_sickle_stone'},
        {output: 'prefab:item_sickle_gold'},
        {output: 'prefab:item_sickle_iron'},
        {output: 'prefab:item_sickle_diamond'},
        {output: 'prefab:item_sickle_netherite'},
        {output: 'prefab:item_clutch_of_eggs'},
        {output: 'prefab:block_boundary'},
        {output: 'prefab:item_crate_of_beets'},
        {output: 'prefab:item_bunch_of_beets'},
        {output: 'prefab:item_bunch_of_carrots'},
        {output: 'prefab:item_bunch_of_potatoes'},
        {output: 'prefab:item_wooden_crate'},
        {output: 'prefab:item_crate_of_potatoes'},
        {output: 'prefab:item_crate_of_carrots'},
        {output: 'prefab:item_swift_blade_netherite'},
        {output: 'prefab:item_swift_blade_diamond'},
        {output: 'prefab:item_swift_blade_steel'},
        {output: 'prefab:item_swift_blade_obsidian'},
        {output: 'prefab:item_swift_blade_osmium'},
        {output: 'prefab:item_swift_blade_iron'},
        {output: 'prefab:item_swift_blade_bronze'},
        {output: 'prefab:item_swift_blade_stone'},
        {output: 'prefab:item_swift_blade_copper'},
        {output: 'quark:beetroot_crate'},
        {output: 'quark:potato_crate'},
        {output: 'quark:carrot_crate'},
        {output: 'supplementaries:rope'},
        {output: 'hexerei:milk_bottle'},
        {output: 'delightful:animal_fat'},
        {output: 'delightful:animal_oil_bottle'},
        {output: 'pipez:fluid_pipe'},
        {output: 'pipez:energy_pipe'},
        {output: 'pipez:gas_pipe'},
        {output: 'pipez:universal_pipe'},
        {output: 'artifacts:flippers'},
        {output: 'artifacts:golden_hook'},
        {output: 'artifacts:feral_claws'},
        {output: 'artifacts:helium_flamingo'},
        {output: 'artifacts:everlasting_beef'},
        {output: 'artifacts:eternal_steak'},
        {output: 'artifacts:snorkel'},
        {output: 'artifacts:umbrella'},
        {output: 'quark:feeding_trough'},
        {output: 'sophisticatedstorage:feeding_upgrade'},
        {output: 'sophisticatedstorage:advanced_feeding_upgrade'},
        {output: 'toms_storage:ts.polymorphic_item_filter'},
        {output: 'sophisticatedstorage:pump_upgrade'},
        {output: 'sophisticatedstorage:advanced_pump_upgrade'},
        {output: 'sophisticatedstorage:xp_pump_upgrade'},
        {output: 'structure_gel:red_gel'},
        {output: 'structure_gel:blue_gel'},
        {output: 'structure_gel:green_gel'},
        {output: 'structure_gel:cyan_gel'},
        {output: 'structure_gel:orange_gel'},
        {output: 'structure_gel:yellow_gel'},
        {output: 'structure_gel:data_handler'},
        {output: 'structure_gel:dynamic_spawner'},
        {output: 'structure_gel:building_tool'},
        {output: 'crittersandcompanions:diamond_dragonfly_armor'},
        {output: 'crittersandcompanions:gold_dragonfly_armor'},
        {output: 'crittersandcompanions:iron_dragonfly_armor'},
        {output: 'sophisticatedstorage:jukebox_upgrade'},
        {output: 'sophisticatedstorage:debug_tool'},
        {output: 'delightful:cooked_venison_chops'},
        {output: 'twilightforest:raw_venison'},
        {output: 'twilightforest:cooked_venison'},
        {output: 'twilightdelight:raw_venison_rib'},
        {output: 'twilightdelight:cooked_venison_rib'},
        {output: 'environmental:cherry_crate'},
        {output: 'environmental:cherries'},
        {output: 'toms_storage:ts.open_crate'},
        {output: 'sophisticatedstorage:shulker_box'},
        {output: 'sophisticatedstorage:iron_shulker_box'},
        {output: 'sophisticatedstorage:gold_shulker_box'},
        {output: 'sophisticatedstorage:diamond_shulker_box'},
        {output: 'sophisticatedstorage:netherite_shulker_box'},
        {output: 'delightful:zinc_knife'},
        {output: 'ends_delight:purpur_knife'},
        {output: 'ends_delight:end_stone_knife'},
        {output: 'ends_delight:dragon_egg_shell_knife'},
        {output: 'farmersdelight:golden_knife'},
        //Replaced Recipes Below
        {output: 'buildinggadgets:gadget_building'},
        {output: 'buildinggadgets:gadget_exchanging'},
        {output: 'buildinggadgets:gadget_copy_paste'},
        {output: 'buildinggadgets:gadget_destruction'},
        {output: 'farmersdelight:organic_compost'},
        {output: 'tiab:time_in_a_bottle'},
        {output: 'crittersandcompanions:pearl_necklace_2'},
        {output: 'crittersandcompanions:pearl_necklace_3'},
        {output: 'mermod:moon_rock_modifier'},
        {output: 'farmersdelight:hamburger'},
        {output: 'delightful:cheeseburger'},
        {output: 'delightful:deluxe_cheeseburger'},
        {output: 'naturescompass:naturescompass'},
        {output: 'ring_of_enderchest:ring_of_enderchest'},
        {output: 'pipez:item_pipe'},
        {output: 'tarotcards:tarot_deck'},
        {output: 'mermod:sea_crystal'},
        {output: 'incubation:fried_egg'},
        {mod: 'plushies'},
        {output: 'minecraft:mushroom_stew'},
        {output: 'immersive_aircraft:improved_landing_gear'},
        {output: 'immersive_aircraft:industrial_gears'},
        {output: 'immersive_aircraft:hull_reinforcement'},
        {output: 'immersive_aircraft:hull'},
        {output: 'immersive_aircraft:sail'},
        {output: 'immersive_aircraft:boiler'},
        {output: 'immersive_aircraft:engine'},
        {output: 'immersive_aircraft:steel_boiler'},
        {output: 'immersive_aircraft:propeller'},
        {output: 'immersive_aircraft:enhanced_propeller'},
        {output: 'immersive_aircraft:sturdy_pipes'},
        {output: 'immersive_aircraft:airship'},
        {output: 'immersive_aircraft:biplane'},
        {output: 'immersive_aircraft:gyrodyne'},
        {output: 'luphieclutteredmod:luphie_sewing_table_clutter'},
        {output: 'nethersdelight:blackstone_blast_furnace'},
        {output: 'minecraft:milk_bucket'},
        {output: 'buildinggadgets:template_manager'},
        {output: 'charginggadgets:charging_station'},
        {output: 'contact:green_postbox'},
        {output: 'contact:red_postbox'},
        {output: 'contact:center_mailbox'},
        {output: 'contact:black_mailbox'},
        {output: 'contact:red_mailbox'},
        {output: 'contact:green_mailbox'},
        {output: 'contact:brown_mailbox'},
        {output: 'contact:blue_mailbox'},
        {output: 'contact:purple_mailbox'},
        {output: 'contact:orange_mailbox'},
        {output: 'contact:magenta_mailbox'},
        {output: 'contact:light_blue_mailbox'},
        {output: 'contact:yellow_mailbox'},
        {output: 'contact:lime_mailbox'},
        {output: 'contact:pink_mailbox'},
        {output: 'contact:gray_mailbox'},
        {output: 'contact:light_gray_mailbox'},
        {output: 'contact:cyan_mailbox'},
        {output: 'contact:white_mailbox'},
        {output: 'functionalstorage:armory_cabinet'},
        {output: 'caupona:stock_aspic'},
        {output: 'caupona:stock'},
        {mod: 'mcsa'},
        {output: 'comforts:sleeping_bag_purple'},
        {output: 'comforts:sleeping_bag_blue'},
        {output: 'comforts:sleeping_bag_brown'},
        {output: 'comforts:sleeping_bag_green'},
        {output: 'comforts:sleeping_bag_red'},
        {output: 'comforts:sleeping_bag_black'},
        {output: 'comforts:sleeping_bag_white'},
        {output: 'comforts:sleeping_bag_orange'},
        {output: 'comforts:sleeping_bag_magenta'},
        {output: 'comforts:sleeping_bag_light_blue'},
        {output: 'comforts:sleeping_bag_yellow'},
        {output: 'comforts:sleeping_bag_lime'},
        {output: 'comforts:sleeping_bag_pink'},
        {output: 'comforts:sleeping_bag_gray'},
        {output: 'comforts:sleeping_bag_light_gray'},
        {output: 'comforts:sleeping_bag_cyan'},
        {output: 'deeperdarker:soul_elytra'},
        {output: 'better_fishing_rods:mixed_ore_chunk'},
        {output: 'spelunkery:glowstick'},
        {output: 'spelunkery:coal_lump'},
        {output: 'minecraft:coal'},
        {output: 'alexsmobs:transmutation_table'},
        {output: 'sophisticatedstorage:filter_upgrade'},
        {output: 'sophisticatedstorage:advanced_filter_upgrade'},
        {output: 'minecraft:lodestone'}
    ];
    
      for (const remove of toRemove) {
        event.remove(remove);
    }
})
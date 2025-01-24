ServerEvents.recipes(event => {
    // All Recipe Removal
    let toRemove = [
        //Removed Recipes
        {output: 'ae2:matter_ball'},
        {output: 'ae2:matter_cannon'},
        {output: 'ae2:light_gray_lumen_paint_ball'},
        {output: 'ae2:cyan_lumen_paint_ball'},
        {output: 'ae2:purple_lumen_paint_ball'},
        {output: 'ae2:blue_lumen_paint_ball'},
        {output: 'ae2:brown_lumen_paint_ball'},
        {output: 'ae2:green_lumen_paint_ball'},
        {output: 'ae2:black_lumen_paint_ball'},
        {output: 'ae2:red_lumen_paint_ball'},
        {output: 'ae2:white_lumen_paint_ball'},
        {output: 'ae2:orange_lumen_paint_ball'},
        {output: 'ae2:magenta_lumen_paint_ball'},
        {output: 'ae2:light_blue_lumen_paint_ball'},
        {output: 'ae2:yellow_lumen_paint_ball'},
        {output: 'ae2:lime_lumen_paint_ball'},
        {output: 'ae2:pink_lumen_paint_ball'},
        {output: 'ae2:gray_lumen_paint_ball'},
        {output: 'ae2:light_gray_paint_ball'},
        {output: 'ae2:cyan_paint_ball'},
        {output: 'ae2:purple_paint_ball'},
        {output: 'ae2:blue_paint_ball'},
        {output: 'ae2:brown_paint_ball'},
        {output: 'ae2:green_paint_ball'},
        {output: 'ae2:black_paint_ball'},
        {output: 'ae2:red_paint_ball'},
        {output: 'ae2:white_paint_ball'},
        {output: 'ae2:orange_paint_ball'},
        {output: 'ae2:magenta_paint_ball'},
        {output: 'ae2:light_blue_paint_ball'},
        {output: 'ae2:yellow_paint_ball'},
        {output: 'ae2:lime_paint_ball'},
        {output: 'ae2:pink_paint_ball'},
        {output: 'ae2:gray_paint_ball'},
        {output: 'ae2:logic_processor_press'},
        {output: 'ae2:engineering_processor_press'},
        {output: 'ae2:calculation_processor_press'},
        {output: 'ae2:printed_logic_processor'},
        {output: 'ae2:printed_engineering_processor'},
        {output: 'ae2:printed_calculation_processor'},
        {output: 'ae2:engineering_processor'},
        {output: 'ae2:calculation_processor'},
        {output: 'ae2:logic_processor'},
        {output: 'ae2:silicon_press'},
        {output: 'ae2:crafting_card'},
        {output: 'ae2:spatial_cell_component_2'},
        {output: 'ae2:spatial_cell_component_16'},
        {output: 'ae2:spatial_cell_component_128'},
        {output: 'ae2:spatial_storage_cell_2'},
        {output: 'ae2:spatial_storage_cell_16'},
        {output: 'ae2:spatial_storage_cell_128'},
        {output: 'ae2:spatial_pylon'},
        {output: 'ae2:spatial_anchor'},
        {output: 'ae2:spatial_io_port'},
        {output: 'ae2:pattern_provider'},
        {output: 'ae2:cable_pattern_provider'},
        {output: 'ae2:1k_crafting_storage'},
        {output: 'ae2:4k_crafting_storage'},
        {output: 'ae2:16k_crafting_storage'},
        {output: 'ae2:64k_crafting_storage'},
        {output: 'ae2:256k_crafting_storage'},
        {output: 'ae2:crafting_monitor'},
        {output: 'ae2:molecular_assembler'},
        {output: 'ae2:energy_acceptor'},
        {output: 'ae2:energy_cell'},
        {output: 'ae2:dense_energy_cell'},
        {output: 'ae2:energy_level_emitter'},
        {output: 'ae2:cable_energy_acceptor'},
        {output: 'ae2:fe_p2p_tunnel'},
        {output: 'ae2:annihilation_plane'},
        {output: 'ae2:formation_plane'},
        {output: 'ae2:pattern_access_terminal'},
        {output: 'ae2:not_so_mysterious_cube'},
        {output: 'ae2:condenser'},
        {output: 'ae2:quantum_entangled_singularity'},
        {output: 'ae2:quantum_ring'},
        {output: 'ae2:quantum_link'},
        {output: 'ae2:singularity'},
        {output: 'ae2:crafting_accelerator'},
        {output: 'ae2:silicon'},
        {output: 'ae2:printed_silicon'},
        {output: 'ae2:crafting_unit'},
        {output: 'ae2:charger'},
        {output: 'ae2:blank_pattern'},
        {output: 'ae2:growth_accelerator'},
        {output: 'ae2:inscriber'},
        {output: 'ae2:name_press'},
        {output: 'ae2:pattern_encoding_terminal'},
        {output: 'ae2:guide'}, 
        //Replaced Recipes
        {id: 'ae2:charger/charged_certus_quartz_crystal'},
        {output: 'ae2:drive'},
        {output: 'ae2:terminal'},
        {output: 'ae2:crafting_terminal'},
        {output: 'ae2:annihilation_core'},
        {output: 'ae2:cell_component_256k'},
        {output: 'ae2:cell_component_64k'},
        {output: 'ae2:cell_component_16k'},
        {output: 'ae2:cell_component_4k'},
        {output: 'ae2:cell_component_1k'},
        {output: 'ae2:wireless_crafting_terminal'},
        {output: 'ae2:formation_core'},
        {output: 'ae2:wireless_terminal'},
        {output: 'ae2:item_cell_housing'},
        {output: 'ae2:fluid_cell_housing'},
        {output: 'ae2:fluid_storage_cell_256k'},
        {output: 'ae2:item_storage_cell_64k'},
        {output: 'ae2:item_storage_cell_16k'},
        {output: 'ae2:fluid_storage_cell_64k'},
        {output: 'ae2:fluid_storage_cell_16k'},
        {output: 'ae2:item_storage_cell_4k'},
        {output: 'ae2:item_storage_cell_1k'},
        {output: 'ae2:fluid_storage_cell_4k'},
        {output: 'ae2:fluid_storage_cell_1k'},
        {output: 'ae2:item_storage_cell_256k'},
        {output: 'ae2:portable_item_cell_1k'},
        {output: 'ae2:portable_item_cell_4k'},
        {output: 'ae2:portable_item_cell_16k'},
        {output: 'ae2:portable_item_cell_64k'},
        {output: 'ae2:portable_item_cell_256k'},
        {output: 'ae2:portable_fluid_cell_1k'},
        {output: 'ae2:portable_fluid_cell_4k'},
        {output: 'ae2:portable_fluid_cell_16k'},
        {output: 'ae2:portable_fluid_cell_64k'},
        {output: 'ae2:portable_fluid_cell_256k'},
        {output: 'ae2:sky_stone_chest'},
        {output: 'ae2:smooth_sky_stone_chest'},
        {output: 'ae2:mysterious_cube'},
        {output: 'ae2:basic_card'},
        {output: 'ae2:advanced_card'},
        {output: 'ae2:equal_distribution_card'}, 
        {output: 'ae2:energy_card'}, 
        {output: 'ae2:void_card'},
        {output: 'ae2:vibration_chamber'},
        
    ];
    
      for (const remove of toRemove) {
        event.remove(remove);
    }
})
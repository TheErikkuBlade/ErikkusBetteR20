const baseTemplate = function () {
	d20plus.template = {};

	d20plus.template.swapTemplates = () => {
		d20plus.ut.log("Swapping templates...");
		$("#tmpl_charactereditor").html($(d20plus.template_charactereditor).html());
		$("#tmpl_handouteditor").html($(d20plus.template_handouteditor).html());
		$("#tmpl_deckeditor").html($(d20plus.template.deckeditor).html());
		$("#tmpl_cardeditor").html($(d20plus.template.cardeditor).html());
	};

	d20plus.settingsHtmlPtFooter = `<p>
			<a class="btn " href="#" id="button-edit-config" style="margin-top: 3px; width: calc(100% - 22px);">Edit Config</a>
			</p>
			<p>
			For help, advice, and updates, <a href="https://discord.gg/nGvRCDs" target="_blank" style="color: #08c;">join our Discord!</a>
			</p>
			<p>
			<a class="btn player-hidden" href="#" id="button-view-tools" style="margin-top: 3px; margin-right: 7px;">Open Tools List</a>
			<a class="btn" href="#" id="button-manage-qpi" style="margin-top: 3px;" title="It's like the Roll20 API, but even less useful">Manage QPI Scripts</a>
			</p>
			<style id="dynamicStyle"></style>
		`;

	d20plus.artTabHtml = `
	<p style="display: flex; width: 100%; justify-content: space-between;">
		<button class="btn" id="button-add-external-art" style="margin-right: 5px; width: 100%;">Manage External Art</button>
		<button class="btn" id="button-browse-external-art" style="width: 100%;">Browse Repo</button>
	</p>
	`;

	d20plus.addArtHTML = `
	<div id="d20plus-artfolder" title="External Art" style="position: relative">
	<p>Add external images by URL. Any direct link to an image should work.</p>
	<p>
	<input placeholder="Name*" id="art-list-add-name">
	<input placeholder="URL*" id="art-list-add-url">
	<a class="btn" href="#" id="art-list-add-btn">Add URL</a>
	<a class="btn" href="#" id="art-list-multi-add-btn">Add Multiple URLs...</a>
	<a class="btn btn-danger" href="#" id="art-list-delete-all-btn" style="margin-left: 12px;">Delete All</a>
	<p/>
	<hr>
	<div id="art-list-container">
	<input class="search" autocomplete="off" placeholder="Search list..." style="width: 100%;">
	<br>
	<p>
		<span style="display: inline-block; width: 40%; font-weight: bold;">Name</span>
		<span style="display: inline-block; font-weight: bold;">URL</span>
	</p>
	<ul class="list artlist" style="max-height: 600px; overflow-y: scroll; display: block; margin: 0; transform: translateZ(0);"></ul>
	</div>
	</div>`;

	d20plus.addArtMassAdderHTML = `
	<div id="d20plus-artmassadd" title="Mass Add Art URLs">
	<p>One entry per line; entry format: <b>[name]---[URL (direct link to image)]</b> <button class="btn" id="art-list-multi-add-btn-submit">Add URLs</button></p>
	<p><textarea id="art-list-multi-add-area" style="width: 100%; height: 100%; min-height: 500px;" placeholder="My Image---http://example.com/img1.png"></textarea></p>
	</div>`;

	d20plus.artListHTML = `
	<div id="Vetoolsresults">
	<ol class="dd-list" id="image-search-none"><div class="alert white">No results found in 5etools for those keywords.</div></ol>

	<ol class="dd-list" id="image-search-has-results">
		<li class="dd-item dd-folder Vetoolsresult">
			<div class="dd-content">
				<div class="folder-title">From 5etools</div>
			</div>

			<ol class="dd-list Vetoolsresultfolder" id="custom-art-results"></ol>
		</li>
	</ol>
	</div>`;

	d20plus.configEditorHTML = `
	<div id="d20plus-configeditor" title="Config Editor" style="position: relative">
	<!-- populate with js -->
	</div>`;

	d20plus.configEditorButtonBarHTML = `
	<div class="ui-dialog-buttonpane ui-widget-content ui-helper-clearfix">
	<div class="ui-dialog-buttonset">
		<button type="button" id="configsave" alt="Save" title="Save Config" class="btn" role="button" aria-disabled="false">
			<span>Save</span>
		</button>
	</div>
	</div>
	`;

	d20plus.tool.toolsListHtml = `
		<div id="d20-tools-list" title="Tools List" style="position: relative">
		<div class="tools-list">
		<!-- populate with js -->
		</div>
		</div>
		`;

	// no mods; just switched in to grant full features to non-pro
	d20plus.template_TokenEditor = `<script id='tmpl_tokeneditor' type='text/html'>
	<div class='dialog largedialog tokeneditor' style='display: block;'>
		<ul class='nav nav-tabs'>
			<li class='active'>
				<a data-tab='basic' href='javascript:void(0);'>Basic</a>
			</li>
			<li>
				<a data-tab='advanced' href='javascript:void(0);'>Advanced</a>
			</li>
			<li class='nav-tabs--beta'>
				<a data-tab='prototype' href='javascript:void(0);'>Dynamic Lighting</a>
				<span class='label label-info'>
Updated
</span>
			</li>
		</ul>
		<div class='tab-content'>
			<div class='basic tab-pane'>
				<div style='float: left; width: 300px;'>
					<div style='float: right; margin-right: 85px; font-size: 1.2em; position: relative; top: -4px; cursor: help;'>
						<a class='showtip pictos' title='You can choose to have the token represent a Character from the Journal. If you do, the token&#39;s name, controlling players, and bar values will be based on the Character. Most times you&#39;ll just leave this set to None/Generic.'>?</a>
					</div>
					<label>Represents Character</label>
					<select class='represents'>
						<option value=''>None/Generic Token</option>
						<$ _.each(window.Campaign.activeCharacters(), function(char) { $>
						<option value="<$!char.id$>"><$!char.get("name")$></option>
						<$ }); $>
					</select>
					<div class='clear'></div>
					<div style='float: right; margin-right: 75px;'>
						<label>
							<input class='showname' type='checkbox' value='1'>
							Show nameplate?
						</label>
					</div>
					<label>Name</label>
					<input class='name' style='width: 210px;' type='text'>
					<div class='clear'></div>
					<label>Controlled By</label>
					<$ if(this.character) { $>
					<p>(Determined by Character settings)</p>
					<$ } else { $>
					<select class='controlledby selectize' multiple='true'>
						<option value='all'>All Players</option>
						<$ window.Campaign.players.each(function(player) { $>
						<option value="<$!player.id$>"><$!player.get("displayname")$></option>
						<$ }); $>
					</select>
					<$ } $>
					<div class='clear' style='height: 10px;'></div>
					<label>
						Tint Color
					</label>
					<input class='tint_color colorpicker' type='text'>
					<div class='clear'></div>
				</div>
				<div style='float: left; width: 300px;'>
					<label>
						<span class='bar_color_indicator' style='background-color: <$!window.Campaign.get('bar1_color')$>'></span>
						Bar 1
					</label>
					<div class='clear' style='height: 1px;'></div>
					<div class='inlineinputs' style='margin-top: 5px; margin-bottom: 5px;'>
						<input class='bar1_value' type='text'>
						/
						<input class='bar1_max' type='text'>
						<$ if(this.character) { $>
						<div style='float: right;'>
							<select class='bar1_link' style='width: 125px;'>
								<option value=''>None</option>
								<$ _.each(this.tokensettingsview.availAttribs(), function(attrib) { $>
								<option value="<$!attrib.id$>"><$!attrib.name$>
									<$ }); $>
							</select>
							<a class='pictos showtip' style='font-size: 1.2em; position: relative; top: -5px; margin-left: 10px; cursor: help;' title='You can choose an Attribute from the Character this token represents. The values for this bar will be synced to the values of that Attribute.'>?</a>
						</div>
						<$ } $>
					</div>
					<span style='color: #888;'>(Leave blank for no bar)</span>
					<div class='clear'></div>
					<label>
						<span class='bar_color_indicator' style='background-color: <$!window.Campaign.get('bar2_color')$>'></span>
						Bar 2
					</label>
					<div class='inlineinputs' style='margin-top: 5px; margin-bottom: 5px;'>
						<input class='bar2_value' type='text'>
						/
						<input class='bar2_max' type='text'>
						<$ if(this.character) { $>
						<div style='float: right; margin-right: 30px;'>
							<select class='bar2_link' style='width: 125px;'>
								<option value=''>None</option>
								<$ _.each(this.tokensettingsview.availAttribs(), function(attrib) { $>
								<option value="<$!attrib.id$>"><$!attrib.name$>
									<$ }); $>
							</select>
						</div>
						<$ } $>
					</div>
					<span style='color: #888;'>(Leave blank for no bar)</span>
					<div class='clear'></div>
					<label>
						<span class='bar_color_indicator' style='background-color: <$!window.Campaign.get('bar3_color')$>'></span>
						Bar 3
					</label>
					<div class='inlineinputs' style='margin-top: 5px; margin-bottom: 5px;'>
						<input class='bar3_value' type='text'>
						/
						<input class='bar3_max' type='text'>
						<$ if(this.character) { $>
						<div style='float: right; margin-right: 30px;'>
							<select class='bar3_link' style='width: 125px;'>
								<option value=''>None</option>
								<$ _.each(this.tokensettingsview.availAttribs(), function(attrib) { $>
								<option value="<$!attrib.id$>"><$!attrib.name$>
									<$ }); $>
							</select>
						</div>
						<$ } $>
					</div>
					<span style='color: #888;'>(Leave blank for no bar)</span>
					<div class='clear' style='height: 10px;'></div>
					<div style='float: left; width: 130px;'>
						<div style='float: right;'>
							<label>
								<input class='aura1_square' type='checkbox'>
								Square
							</label>
						</div>
						<label>
							Aura 1
						</label>
						<div class='inlineinputs' style='margin-top: 5px;'>
							<input class='aura1_radius' type='text'>
							<$!window.Campaign.activePage().get("scale_units")$>.
							<input class='aura1_color colorpicker' type='text'>
						</div>
					</div>
					<div style='float: left; width: 130px; margin-left: 20px;'>
						<div style='float: right;'>
							<label>
								<input class='aura2_square' type='checkbox'>
								Square
							</label>
						</div>
						<label>
							Aura 2
						</label>
						<div class='inlineinputs' style='margin-top: 5px;'>
							<input class='aura2_radius' type='text'>
							<$!window.Campaign.activePage().get("scale_units")$>.
							<input class='aura2_color colorpicker' type='text'>
						</div>
					</div>
					<div class='clear'></div>
				</div>
				<div class='clear'></div>
				<hr>
				<h4>
					GM Notes
					<span style='font-weight: regular; font-size: 0.9em;'>(Only visible to GMs)</span>
				</h4>
				<textarea class='gmnotes summernote'></textarea>
				<div class='clear'></div>
				<label>&nbsp;</label>
			</div>
			<div class='advanced tab-pane'>
				<div class='row-fluid'>
					<div class='div player-permissions'>
						<h4>Player Permissions</h4>
						<div style='margin-left: 5px;'>
							<div class='permission_section'>
								<div class='inlineinputs'>
									<label class='permissions_category'>Name</label>
									<label>
										<input class='showplayers_name' type='checkbox'>
										See
									</label>
									<label>
										<input class='playersedit_name' type='checkbox'>
										Edit
									</label>
								</div>
								<div class='clear'></div>
							</div>
							<hr>
							<div class='permission_section bar1'>
								<div class='inlineinputs'>
									<label class='permissions_category'>Bar 1</label>
									<label>
										<input class='showplayers_bar1' type='checkbox'>
										See
									</label>
									<label>
										<input class='playersedit_bar1' type='checkbox'>
										Edit
									</label>
								</div>
								<div class='clear'></div>
								<label class='bar_val_permission'>
									Text Overlay:
									<select class='bar1options'>
										<option value='hidden'>
											Hidden
										</option>
										<option selected value='editors'>
											Visible to Editors
										</option>
										<option value='everyone'>
											Visible to Everyone
										</option>
									</select>
								</label>
							</div>
							<hr>
							<div class='permission_section bar2'>
								<div class='inlineinputs'>
									<label class='permissions_category'>Bar 2</label>
									<label>
										<input class='showplayers_bar2' type='checkbox'>
										See
									</label>
									<label>
										<input class='playersedit_bar2' type='checkbox'>
										Edit
									</label>
								</div>
								<div class='clear'></div>
								<label class='bar_val_permission'>
									Text Overlay:
									<select class='bar2options'>
										<option value='hidden'>
											Hidden
										</option>
										<option selected value='editors'>
											Visible to Editors
										</option>
										<option value='everyone'>
											Visible to Everyone
										</option>
									</select>
								</label>
							</div>
							<hr>
							<div class='permission_section bar3'>
								<div class='inlineinputs'>
									<label class='permissions_category'>Bar 3</label>
									<label>
										<input class='showplayers_bar3' type='checkbox'>
										See
									</label>
									<label>
										<input class='playersedit_bar3' type='checkbox'>
										Edit
									</label>
								</div>
								<div class='clear'></div>
								<label class='bar_val_permission'>
									Text Overlay:
									<select class='bar3options'>
										<option value='hidden'>
											Hidden
										</option>
										<option selected value='editors'>
											Visible to Editors
										</option>
										<option value='everyone'>
											Visible to Everyone
										</option>
									</select>
								</label>
								<div class='clear'></div>
							</div>
							<hr>
							<div class='permission_section barLocation'>
								<label class='movable_token_bar'>
									Bar Location:
									<select>
										<option selected value='above'>
											Above
										</option>
										<option value='overlap_top'>
											Top Overlapping
										</option>
										<option value='overlap_bottom'>
											Bottom Overlapping
										</option>
										<option value='below'>
											Below
										</option>
									</select>
									<a class='showtip pictos' style='padding-left: 26px;' title='&lt;b&gt;Above:&lt;/b&gt; &lt;br&gt; All bars are above the token. (Default for new games) &lt;br&gt; &lt;b&gt;Top Overlapping:&lt;/b&gt; &lt;br&gt; The bottom-most bar overlaps the top of the token. Other bars float above it. &lt;br&gt; &lt;b&gt;Bottom Overlapping:&lt;/b&gt; &lt;br&gt; Bars fill the token from the bottom up. &lt;br&gt; &lt;b&gt;Below:&lt;/b&gt; &lt;br&gt; All bars are below the token.'>?</a>
								</label>
								<label class='compact_bar'>
									Bar Style:
									<div class='radio'>
										<label>
											<input name='barStyle' type='radio' value='standard'>
											Standard
										</label>
									</div>
									<div class='radio'>
										<label style='width:50px;'>
											<input name='barStyle' type='radio' value='compact'>
											Compact
										</label>
									</div>
									<a class='showtip pictos' id='barstyletip' title='&lt;b&gt;Standard:&lt;/b&gt;&lt;br&gt; Full sized token bar, displays text overlays. &lt;br&gt; &lt;b&gt;Compact:&lt;/b&gt; &lt;br&gt;Narrow token bars. No text overlay.'>?</a>
								</label>
							</div>
							<hr>
							<div class='permission_section'>
								<div class='inlineinputs'>
									<label class='permissions_category'>Aura 1</label>
									<label>
										<input class='showplayers_aura1' type='checkbox'>
										See
									</label>
									<label>
										<input class='playersedit_aura1' type='checkbox'>
										Edit
									</label>
								</div>
								<div class='clear'></div>
							</div>
							<hr>
							<div class='permission_section'>
								<div class='inlineinputs'>
									<label class='permissions_category'>Aura 2</label>
									<label>
										<input class='showplayers_aura2' type='checkbox'>
										See
									</label>
									<label>
										<input class='playersedit_aura2' type='checkbox'>
										Edit
									</label>
								</div>
								<div class='clear'></div>
							</div>
							<hr>
							<small style='text-align: left; font-size: 0.9em;'>
								See: All Players can view
								<br>
								Edit: Controlling players can view and change
							</small>
						</div>
						<div class='clear'></div>
					</div>
					<div class='div emits-light'>
						<h4>Emits Light</h4>
						<div class='inlineinputs' style='margin-top: 5px; margin-bottom: 5px;'>
							<input class='light_radius' type='text'>
							<$!window.Campaign.activePage().get("scale_units")$>.
							<input class='light_dimradius' type='text'>
							<$!window.Campaign.activePage().get("scale_units")$>.
							<input class='light_angle' placeholder='360' type='text'>
							<span style='font-size: 2.0em;'>&deg;</span>
						</div>
						<span style='color: #888; padding-left: 5px;'>Light Radius / (optional) Start of Dim / Angle</span>
						<div class='inlineinputs' style='margin-top: 5px;'>
							<label style='margin-left: 7px;'>
								<input class='light_otherplayers' type='checkbox'>
								All Players See Light
							</label>
						</div>
						<div class='inlineinputs' style='margin-top: 2px;'>
							<label style='margin-left: 7px;'>
								<input class='light_hassight' type='checkbox'>
								Has Sight
							</label>
							<span style="margin-left: 9px; margin-right: 28px;">/</span>
							Angle:
							<input class='light_losangle' placeholder='360' type='text'>
							<span style='font-size: 2.0em;'>&deg;</span>
						</div>
						<div class='inlineinputs' style='margin-left: 90px; margin-top: 5px;'>
							<span style="margin-left: 8px; margin-right: 12px;">/</span>
							Multiplier:
							<input class='light_multiplier' placeholder='1.0' style='margin-right: 10px;' type='text'>x</input>
						</div>
						<h4>Advanced Fog of War</h4>
						<div class='inlineinputs' style='margin-top: 5px; margin-bottom: 5px;'>
							<input class='advfow_viewdistance' type='text'>
							<$!window.Campaign.activePage().get("scale_units")$>.
						</div>
						<span style='color: #888; padding-left: 5px;'>Reveal Distance</span>
						<!-- %h4 -->
						<!-- Token Actions -->
						<!-- %a.pictos.showtip(style="margin-left: 15px; cursor: help; font-size: 1.1em; position: relative; top: -2px;" title="Choose from Macros and Abilities of linked Character to show when token is selected") ? -->
						<!-- %p -->
						<!-- %strong Add New Token Action: -->
						<!-- %br -->
						<!-- %select.chosen(placeholder="Choose from the list...") -->
						<!-- %option(value="") Choose from the list... -->
						<!-- <$ if(this.character) { $> -->
						<!-- <optgroup label="Abilities"> -->
						<!-- <$ this.character.abilities.each(function(abil) { $> -->
						<!-- <option value="ability|<$!abil.get('id')$>"><$!abil.get('name')$></option> -->
						<!-- <$ }); $> -->
						<!-- </optgroup> -->
						<!-- <$ } $> -->
					</div>
				</div>
			</div>
			<div class='prototype tab-pane'>
				<div class='alert alert-info' role='alert'>
					<p>This feature is in Active Development: Turning on Updated Dynamic Lighting will turn off Legacy Dynamic Lighting for this page. If you want to go back, you’ll need to turn on Legacy back on for the Page. Revealed areas in one system will not be revealed in the other.  Consider testing the feature in a copy or new game. <a href="https://app.roll20.net/forum/permalink/8422745" target="_blank">Read More…</a></p>
				</div>
				<div class='token_vision'>
					<p class='token_vision_title'>Token Vision</p>
					<div class='dyn_fog_vision' style='padding-top: 10px;'>
						<div class='row-fluid clearfix'>
							<div class='span8'>
								<p class='vision_title'>Vision</p>
							</div>
							<div class='span4 dyn_fog_switch'>
								<label class='switch'>
									<input class='dyn_fog_emits_vision feature_toggle' type='checkbox'>
									<span class='slider round'></span>
									</input>
								</label>
							</div>
						</div>
						<div class='row-fluid clearfix'>
							<div class='span8'>
								<p class='description'>Gives the ability to see, if there is light or if Night Vision is enabled. Tokens with vision can see to the edge of the available light.</p>
							</div>
							<div class='span4 dyn_fog_switch'>
								<div class='hidden'>
									<input class='dyn_fog_vision_range' type='number'>
									<input class='dyn_fog_dim_vision_range' type='number'>
								</div>
							</div>
						</div>
					</div>
					<hr>
					<div class='dyn_fog_dark_vision' style='padding-top: 10px;'>
						<div class='row-fluid clearfix'>
							<div class='span8'>
								<p class='vision_title'>Night Vision</p>
							</div>
							<div class='span4 dyn_fog_switch'>
								<label class='switch'>
									<input class='dyn_fog_emits_dark_vision feature_toggle' data-target='.dark_vision_input' data-toggle='toggle' type='checkbox'>
									<span class='slider round'></span>
									</input>
								</label>
							</div>
						</div>
						<div class='row-fluid clearfix'>
							<div class='span12'>
								<p class='description'>Give this token the ability to see without any light.</p>
							</div>
						</div>
						<div class='row-fluid clearfix toggle-element dark_vision_input'>
							<div class='span8'>
								<label class='distance'>Night Vision Distance</label>
							</div>
							<div class='span4 dyn_fog_switch'>
								<div class='form-group'>
									<div class='input-group'>
										<input class='dyn_fog_dark_vision_range' min='0' type='number'>
										<span class='input-group-addon'><$!window.Campaign.activePage().get("scale_units")$></span>
									</div>
								</div>
							</div>
						</div>
						<div class='row-fluid clearfix'>
							<div class='alert alert-danger negative_number_alert_night_vision hidden' role='alert'>
								<p>Please enter a positive number.</p>
							</div>
						</div>
						<div class='row-fluid clearfix toggle-element dark_vision_input'>
							<div class='span8'>
								<label class='vision-color'>Tint Color</label>
							</div>
							<div class='span4 dyn_fog_switch'>
								<input class='dyn_fog_dark_vision_color colorpicker' type='text'>
							</div>
						</div>
					</div>
					<hr>
					<div class='limit_field_of_vision hidden' style='padding-top: 10px;'>
						<div class='row-fluid clearfix'>
							<div class='span8'>
								<p class='vision_title'>Limit Field of Vision</p>
							</div>
							<div class='span4 dyn_fog_switch'>
								<label class='switch'>
									<input class='field_of_vision feature_toggle' data-target='.field_of_vision_inputs' data-toggle='toggle' type='checkbox'>
									<span class='slider round'></span>
									</input>
								</label>
							</div>
						</div>
						<div class='row-fluid clearfix'>
							<div class='span12'>
								<p class='description'>Limit the field revealed for the token.</p>
							</div>
						</div>
						<div class='row-fluid clearfix toggle-element field_of_vision_inputs'>
							<div class='span3'>
								<label class='distance'>Total</label>
							</div>
							<div class='span3 dyn_fog_switch'>
								<div class='form-group'>
									<div class='input-group'>
										<input class='field_of_vision_total' max='360' min='0' type='number'>
										<span class='input-group-addon'>&deg;</span>
									</div>
								</div>
							</div>
							<div class='span3'>
								<label class='distance'>Center</label>
							</div>
							<div class='span3 dyn_fog_switch'>
								<div class='form-group'>
									<div class='input-group'>
										<input class='field_of_vision_center' max='360' min='0' type='number'>
										<span class='input-group-addon'>&deg;</span>
									</div>
								</div>
							</div>
							<div class='row-fluid clearfix'></div>
							<div class='row-fluid clearfix'>
								<div class='alert alert-danger wrong_number_alert_vision hidden' role='alert'>
									<p>Please enter a number between 0-360.</p>
								</div>
							</div>
							<div class='row-fluid clearfix'>
								<div class='span6'>
									<p class='description'>Total size of the Field of Vision.</p>
								</div>
								<div class='span6'>
									<p class='description'>50% of Vision is before the Center, 50% is after.</p>
								</div>
							</div>
						</div>
						<hr>
					</div>
				</div>
				<div class='token_light'>
					<p class='token_light_title'>Token Emits Light</p>
					<div class='dyn_fog_light' style='padding-top: 10px;'>
						<div class='row-fluid clearfix'>
							<div class='span8'>
								<p class='light_title'>Bright Light</p>
							</div>
							<div class='span4 dyn_fog_switch'>
								<label class='switch'>
									<input class='dyn_fog_emits_light feature_toggle' data-target='.bright_light_input' data-toggle='toggle' type='checkbox'>
									<span class='slider round'></span>
									</input>
								</label>
							</div>
						</div>
						<div class='row-fluid clearfix'>
							<div class='span8'>
								<p class='description'>Makes the token emit Bright Light. Enable this to set its Distance.</p>
							</div>
						</div>
						<div class='row-fluid clearfix toggle-element bright_light_input'>
							<div class='span8'>
								<label class='distance'>Bright Light Distance</label>
							</div>
							<div class='span4 dyn_fog_switch'>
								<div class='form-group'>
									<div class='input-group'>
										<input class='dyn_fog_light_range' min='0' type='number'>
										<span class='input-group-addon'><$!window.Campaign.activePage().get("scale_units")$></span>
									</div>
								</div>
							</div>
						</div>
						<div class='row-fluid clearfix'>
							<div class='alert alert-danger negative_number_alert_bright_light hidden' role='alert'>
								<p>Please enter a positive number.</p>
							</div>
						</div>
					</div>
					<hr>
					<div class='dyn_fog_dim_light' style='padding-top: 10px;'>
						<div class='row-fluid clearfix'>
							<div class='span8'>
								<p class='light_title'>Low Light</p>
							</div>
							<div class='span4 dyn_fog_switch'>
								<label class='switch'>
									<input class='dyn_fog_emits_dim_light feature_toggle' data-target='.low_light_input' data-toggle='toggle' type='checkbox'>
									<span class='slider round'></span>
									</input>
								</label>
							</div>
						</div>
						<div class='row-fluid clearfix'>
							<div class='span8'>
								<p class='description'>Makes the token emit Low Light, in addition to any Bright Light set above. Enable this to set its Distance.</p>
							</div>
						</div>
						<div class='row-fluid clearfix toggle-element low_light_input'>
							<div class='span8'>
								<label class='distance'>Low Light Distance</label>
							</div>
							<div class='span4 dyn_fog_switch'>
								<div class='form-group'>
									<div class='input-group'>
										<input class='dyn_fog_dim_light_range' min='0' type='number'>
										<span class='input-group-addon'><$!window.Campaign.activePage().get("scale_units")$></span>
									</div>
								</div>
							</div>
						</div>
						<div class='row-fluid clearfix'>
							<div class='alert alert-danger negative_number_alert_dim_light hidden' role='alert'>
								<p>Please enter a positive number.</p>
							</div>
						</div>
					</div>
					<hr>
					<div class='directional_bright_light hidden' style='padding-top: 10px;'>
						<div class='row-fluid clearfix'>
							<div class='span8'>
								<p class='light_title'>Directional Light</p>
							</div>
							<div class='span4 dyn_fog_switch'>
								<label class='switch'>
									<input class='directional_bright_light_toggle feature_toggle' data-target='.directional_bright_light_inputs' data-toggle='toggle' type='checkbox'>
									<span class='slider round'></span>
									</input>
								</label>
							</div>
						</div>
						<div class='row-fluid clearfix'>
							<div class='span12'>
								<p class='description'>Set the direction of the Light emitting from this token.</p>
							</div>
						</div>
						<div class='row-fluid clearfix toggle-element directional_bright_light_inputs'>
							<div class='span3'>
								<label class='distance'>Total</label>
							</div>
							<div class='span3 dyn_fog_switch'>
								<div class='form-group'>
									<div class='input-group'>
										<input class='directional_bright_light_total' max='360' min='0' type='number'>
										<span class='input-group-addon'>&deg;</span>
									</div>
								</div>
							</div>
							<div class='span3'>
								<label class='distance'>Center</label>
							</div>
							<div class='span3 dyn_fog_switch'>
								<div class='form-group'>
									<div class='input-group'>
										<input class='directional_bright_light_center' max='360' min='0' type='number'>
										<span class='input-group-addon'>&deg;</span>
									</div>
								</div>
							</div>
							<div class='row-fluid clearfix'></div>
							<div class='row-fluid clearfix'>
								<div class='alert alert-danger wrong_number_alert_bright hidden' role='alert'>
									<p>Please enter a number between 0-360.</p>
								</div>
							</div>
							<div class='row-fluid clearfix'>
								<div class='span6'>
									<p class='description'>Total size of the Field of Light.</p>
								</div>
								<div class='span6'>
									<p class='description'>50% of Light is before the Center, 50% is after.</p>
								</div>
							</div>
						</div>
						<hr>
					</div>
					<div class='total_light'>
						<div class='row-fluid clearfix'>
							<div class='span8'>
								<p class='light_title'>Total Light</p>
							</div>
							<div class='span4 dyn_fog_switch'>
								<div class='form-group'>
									<div class='input-group'>
										<input class='total_light_input' disabled type='number' value='0'>
										<span class='input-group-addon'><$!window.Campaign.activePage().get("scale_units")$></span>
									</div>
								</div>
							</div>
						</div>
						<div class='row-fluid clearfix'>
							<div class='span8'>
								<p class='description'>Amount of light emitting from this token.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</script>
	`;

	d20plus.template_pageSettings = `<script id='tmpl_pagesettings' type='text/html'>
	<ul class='nav nav-tabs'>
		<li class='active'>
			<a data-tab='pagedetails' href='javascript:void(0);'>Page Details</a>
		</li>
		<li class='nav-tabs--beta'>
			<a data-tab='lighting' href='javascript:void(0);'>Dynamic Lighting</a>
			<span class='label label-info'>
Updated
</span>
		</li>
	</ul>
	<div class='tab-content'>
		<div class='pagedetails tab-pane' style='display:block;'>
			<label style='padding-top: 4px;'>
				<strong>Page Size</strong>
			</label>
			<br>
			<div id='size_settings'>
				<div class='row'>
					<span>Width:</span>
					<input type="number" class="width units" value="<$!this.model.get("width")$>" />
					<span>x 70 px =</span>
					<input type="number" class="px_width pixels" value="<$!this.model.get("width")*70$>" />
					<span>px<sup>*</sup></span>
				</div>
				<div class='row'>
					<span>Height:</span>
					<input type="number" class="height units" value="<$!this.model.get("height")$>" />
					<span>x 70 px =</span>
					<input type="number" class="px_height pixels" value="<$!this.model.get("height")*70$>" />
					<span>px<sup>*</sup></span>
				</div>
				<small style='display: block; font-size: 0.9em; float: right; line-height: 0px;'><sub>* when zoom is set to 100%(default)</sub></small>
			</div>
			<div class='clear' style='height: 15px;'></div>
			<label>
				<strong>Background</strong>
			</label>
			<input class='pagebackground' type='text'>
			<hr>
			<label style='position: relative; top: 4px;'><strong>Page Scale:</strong></label>
			<span id='scale_label'>1 grid cell =</span>
			<input type="number" class="scale_number" style="width: 35px;" value="<$!this.model.get("scale_number")$>" />
			<select class='scale_units' style='width: 65px; position: relative;'>
				<option value='ft'>ft.</option>
				<option value='m'>m.</option>
				<option value='km'>km.</option>
				<option value='mi'>mi.</option>
				<option value='in'>in.</option>
				<option value='cm'>cm.</option>
				<option value='un'>un.</option>
				<option value='hex'>hex</option>
				<option value='sq'>sq.</option>
				<option value='custom'>Custom...</option>
			</select>
			<div class='hidden' id='custom_scale_units'>
				<label style='margin-left: 55px; position: relative; top: 6px;'><strong>Custom Unit</strong></label>
				<input style='width: 60px;' type='text'>
			</div>
			<div class='clear' style='height: 15px;'></div>
			<div data-feature_enabled='showgrid' id='grid_settings'>
				<label>
					<strong>Grid</strong>
				</label>
				<input class='gridenabled feature_enabled' type='checkbox' value='1'>&nbsp; Enabled</input>
				<div class='subsettings' style='width: 305px;'>
					<div class='clear' style='height: 7px;'></div>
					<label style='margin-left: 55px; position: relative; top: 4px;'>Type</label>
					<select id='gridtype' style='width: 100px;'>
						<option selected value='square'>Square</option>
						<option value='hex'>Hex (V)</option>
						<option value='hexr'>Hex (H)</option>
					</select>
					<label class='checkbox' id='hexlabels' style='margin-left: 130px; display: block;'>
						<input class='gridlabels' type='checkbox' value='1'>&nbsp; Show Labels</input>
					</label>
					<label style='margin-left: 55px; position: relative; top: 4px;'>
						<a class='tipsy-w showtip pictos' href='https://wiki.roll20.net/Ruler' target='_blank' title='Controls how diagonal cells are measured.'>?</a>
						Measurement
					</label>
					<select id='diagonaltype' style='width: 100px;'>
						<option class='squareonly' selected value='foure'>D&D 5E/4E Compatible</option>
						<option class='squareonly' value='threefive'>Pathfinder/3.5E Compatible</option>
						<option class='squareonly' value='manhattan'>Manhattan</option>
						<option class='hexonly' value='hex'>Hex Path</option>
						<option value='pythagorean'>Euclidean</option>
					</select>
					<div style='float: right;'>
						<a class='tipsy-w showtip pictos' href='https://wiki.roll20.net/Page_Settings#Grid' target='_blank' title='The number of cells per 70 pixels in your grid. Ex .5 = 35 pixels per cell.'>?</a>
						<span id='cell_measurement'>Cell Width:</span>
						<input type="number" class="snappingincrement units" value="<$!this.model.get("snapping_increment")$>" />
						<span>x 70 px =</span>
						<input type="number" class="px_snappingincrement pixels" value="<$!this.model.get("snapping_increment")*70$>" />
						<span>px<sup>*</sup></span>
					</div>
					<div class='clear' style='height: 7px;'></div>
					<label style='margin-left: 55px;'>Color</label>
					<input class='gridcolor' type='text'>
					<div class='clear' style='height: 7px;'></div>
					<label style='margin-left: 55px;'>Opacity</label>
					<div class='gridopacity'></div>
				</div>
			</div>
			<div class='clear' style='height: 10px'></div>
			<hr>
			<!-- BEGIN MOD -->
			<label style='position: relative; top: -2px;'>
				<strong>Weather</strong>
			</label>
			<button class='btn Ve-btn-weather'>
				Configure
			</button>
			<hr>
			<!-- END MOD -->
			<div class='lighting_feature showtip' data-feature_enabled='showdarkness' id='fog_settings' title='Enabling Fog of War will disable Updated Dynamic Lighting'>
				<label class='feature_name'>
					<strong>Fog of War</strong>
				</label>
				<div class='feature_options'>
					<input class='darknessenabled feature_enabled' type='checkbox' value='1'>
					<label class='checkbox'>&nbsp; Enabled</label>
				</div>
			</div>
			<hr>
			<div class='lighting_feature' data-feature_enabled='adv_fow_enabled' id='afow_settings'>
				<!-- BEGIN MOD -->
				<hr>
				<strong style="display: block; margin-bottom: 10px;"><i>Requires a paid subscription or all players to use a betteR20 script</i></strong>
				<!-- END MOD -->
				<label class='feature_name'>
					<strong>Advanced Fog of War</strong>
				</label>
				<div class='feature_options'>
					<input class='advancedfowenabled feature_enabled showtip' type='checkbox' value='1'>
					<label class='checkbox'>&nbsp; Enabled</label>
					<div class='subsettings'>
						<div>
							<input class='advancedfowshowgrid showtip' title='By default the Advanced Fog of War hides the map grid anywhere revealed but the player can no longer see because of Dynamic Lighting. This option makes the grid always visible.' type='checkbox' value='1'>
							<label class='checkbox'>&nbsp; Show Grid</label>
						</div>
						<div>
							<input class='dimlightreveals showtip' title='By default the Advanced Fog of War will not be permanently revealed by Dynamic Lighting that is not bright. This option allows dim lighting to also reveal the fog.' type='checkbox' value='1'>
							<label class='checkbox'>&nbsp; Dim Light Reveals</label>
						</div>
						<div>
							<input class='showtip' id='afow_gm_see_all' title='By default, Advanced Fog of War is only revealed by tokens with sight that are controlled by at least one player.&lt;br&gt;This option allows tokens with sight which are not controlled by anyone to reveal Advanced Fog of War for the GM only.' type='checkbox' value='0'>
							<label class='checkbox'>&nbsp; All Tokens Reveal (GM)</label>
						</div>
						<div id='afow_grid_size' style='width: 180px; line-height: 30px;'>
							<span id='cell_measurement'>Cell Width:</span>
							<input type="number" class="advancedfowgridsize units" value="<$!this.model.get("adv_fow_grid_size")$>" />
							<br>
							<span>x 70 px =</span>
							<input type="number" class="px_advancedfowgridsize pixels" value="<$!this.model.get("adv_fow_grid_size")*70$>" />
							<span>px<sup>*</sup></span>
						</div>
					</div>
				</div>
			</div>
			<div class='lighting_feature' data-feature_enabled='showlighting' id='dynamic_lighting_settings'>
				<label class='feature_name'>
					<strong>Dynamic Lighting</strong>
				</label>
				<div class='feature_options'>
					<input class='lightingenabled feature_enabled showtip' type='checkbox' value='1'>
					<label class='checkbox'>&nbsp; Enabled</label>
					<div class='subsettings'>
						<div>
							<input class='lightenforcelos showtip' title='Player&#39;s line of sight set by what tokens they can control.' type='checkbox' value='1'>
							<label class='checkbox'>&nbsp; Enforce Line of Sight</label>
						</div>
						<div>
							<input class='lightingupdate' type='checkbox' value='1'>
							<label class='checkbox'>&nbsp; Only Update on Drop</label>
						</div>
						<div>
							<input class='lightglobalillum showtip' title='Instead of darkness show light in all places players can see.' type='checkbox' value='1'>
							<label class='checkbox'>&nbsp; Global Illumination</label>
						</div>
					</div>
				</div>
			</div>
			<div class='alert alert-info' role='alert'>
				<p><strong>Legacy</strong> - in the coming months, Advanced Fog of War and Dynamic Lighting will be replaced with Updated Dynamic Lighting.</p>
			</div>
			<hr>
			<div class='lighting_feature' id='restict_movement'>
				<label class='feature_name'>
					<strong>Restrict Movement</strong>
				</label>
				<div class='feature_options'>
					<input class='lightrestrictmove showtip' title='Don&#39;t allow player tokens to move through Dynamic Lighting walls. Can be enabled even if lighting is not used.' type='checkbox' value='1'>
					<label class='checkbox'>&nbsp; Enabled</label>
				</div>
			</div>
			</hr>
			<div id='gm_darkness_opacity'>
				<label class='feature_name'>
					<strong>Darkness Opacity (GM)</strong>
				</label>
				<div class='fogopacity showtip' title='The GM can see through dark areas hidden from the players when using Fog of War, Advanced Fog of War, and/or Dynamic Lighting. This setting adjusts the opacity of those dark areas for the GM only.'></div>
			</div>
			<div class='clear'></div>
			<hr>
			<label style='font-weight: bold;'>Play on Load</label>
			<select class='pagejukeboxtrigger' style='width: 180px;'></select>
			<div class='clear'></div>
			<hr>
			<button class='delete btn btn-danger' style='float: right;'>
				Delete Page
			</button>
			<button class='archive btn'>
				Archive Page
			</button>
			<div class='clear'></div>
		</div>
		<div class='lighting tab-pane'>
			<div class='border_box lighting_feature' data-feature_enabled='dyn_fog_prototype_enabled' id='dyn_fog_prototype_settings'>
				<div class='alert alert-info' role='alert'>
					<p>This feature is in Active Development: Turning on Updated Dynamic Lighting will turn off Legacy Dynamic Lighting for this page. If you want to go back, you’ll need to turn on Legacy back on for the Page. Revealed areas in one system will not be revealed in the other.  Consider testing the feature in a copy or new game. <a href="https://app.roll20.net/forum/permalink/8422745" target="_blank">Read More…</a></p>
				</div>
				<div class='dyn_fog_settings'>
					<div class='row'>
						<div class='col-xs-6'>
							<p class='dynamic_lighting_title'>Dynamic Lighting</p>
						</div>
						<div class='col-xs-3 dyn_fog_switch'>
							<label class='switch'>
								<input class='dyn_fog_enabled feature_enabled' type='checkbox'>
								<span class='slider round'></span>
								</input>
							</label>
						</div>
					</div>
				</div>
				<hr>
				<div class='explorer_mode'>
					<div class='row'>
						<div class='col-xs-6'>
							<p class='explorer_mode_title'>Explorer Mode</p>
						</div>
						<div class='col-xs-3 dyn_fog_switch'>
							<label class='switch'>
								<input class='dyn_fog_autofog_mode' type='checkbox'>
								<span class='slider round'></span>
								</input>
							</label>
						</div>
					</div>
					<div class='row'>
						<div class='col-xs-11'>
							<p class='description'>Reveals areas of the Map Layer that Players have already explored. Does not reveal areas that were revealed when Explorer Mode is disabled. Previously called "Advanced Fog of War".</p>
						</div>
					</div>
				</div>
				<hr>
				<div class='daylight_mode'>
					<div class='row'>
						<div class='col-xs-6'>
							<p class='explorer_mode_title'>Daylight Mode</p>
						</div>
						<div class='col-xs-3 dyn_fog_switch'>
							<label class='switch'>
								<input class='dyn_fog_global_illum' type='checkbox'>
								<span class='slider round'></span>
								</input>
							</label>
						</div>
					</div>
					<div class='row'>
						<div class='col-xs-11'>
							<p class='description'>Adds Light to the whole Page, good for a sunny day or well lit room or GMs who don't want to place a bunch of torches. Previously called "Global Illumination".</p>
						</div>
					</div>
				</div>
				<hr>
				<div class='gm_darkness_opacity'>
					<div class='row'>
						<div class='col-xs-12'>
							<p class='opacity_title'>GM Darkness Opacity</p>
						</div>
					</div>
					<div class='row'>
						<div class='col-xs-11'>
							<p class='description'>The GM can see through dark areas hidden from the Players when using Dynamic Lighting. This setting adjusts the opacity of those dark areas for the GM only.</p>
						</div>
					</div>
					<div class='row'>
						<div class='col-xs-8'>
							<div class='fogopacity'></div>
						</div>
						<div class='col-xs-1'>
							<input class='opacity_percentage' disabled type='text'>
						</div>
					</div>
				</div>
				<hr>
			</div>
		</div>
	</div>
</script>
`;

	d20plus.template_actionsMenu = `
		<script id='tmpl_actions_menu' type='text/html'>
			<div class='actions_menu d20contextmenu'>
				<ul>
					<$ if (Object.keys(this).length === 0) { $>
						<li data-action-type='unlock-tokens'>Unlock...</li>
					<$ } $>
					<$ if(this.view && this.view.graphic.type == "image" && this.get("cardid") !== "") { $>
						<li class='head hasSub' data-action-type='takecard'>Take Card</li>
						<li class='head hasSub' data-action-type='flipcard'>Flip Card</li>
					<$ } $>
					<$ if(window.is_gm) { $>
						<$ if(this.view && this.get("isdrawing") === false && window.currentEditingLayer != "map") { $>
							<!-- BEGIN MOD -->
							<li class='head hasSub' data-menuname='massroll'>
								Mass Roll &raquo;
								<ul class='submenu' data-menuname='massroll'>
									<li class='head hasSub' data-action-type='rollinit'>Initiative</li>
									<li class='head hasSub' data-action-type='rollsaves'>Save</li>
									<li class='head hasSub' data-action-type='rollskills'>Skill</li>
								</ul>
							</li>
							<!-- END MOD -->
							<li class='head hasSub' data-action-type='addturn'>Add Turn</li>
						<$ } $>
						<!-- BEGIN MOD -->
						<!-- <li class='head'>Edit</li> -->
						<!-- END MOD -->
						<$ if(this.view) { $>
							<li data-action-type='delete'>Delete</li>
							<li data-action-type='copy'>Copy</li>
						<$ } $>
						<li data-action-type='paste'>Paste</li>
						<!-- BEGIN MOD -->
						<$ if(!this.view) { $>
							<li data-action-type='undo'>Undo</li>
						<$ } $>
						<!-- END MOD -->

						<!-- BEGIN MOD -->
						<$ if(this.view) { $>
							<li class='head hasSub' data-menuname='move'>
							Move &raquo;
								<ul class='submenu' data-menuname='move'>
									<li data-action-type='tofront'>To Front</li>
									<li data-action-type='forward-one'>Forward One<!-- (B-F)--></li>
									<li data-action-type='back-one'>Back One<!-- (B-B)--></li>
									<li data-action-type='toback'>To Back</li>
								</ul>
							</li>
						<$ } $>

						<li class='head hasSub' data-menuname='VeUtil'>
							Utilities &raquo;
							<ul class='submenu' data-menuname='VeUtil'>
								<li data-action-type='util-scenes'>Start Scene</li>
								<$ if(this.get && this.get("type") == "image") { $>
									<div class="ctx__divider"></div>
									<li data-action-type='token-animate'>Animate</li>
									<li data-action-type='token-fly'>Set&nbsp;Flight&nbsp;Height</li>
									<li data-action-type='token-light'>Set&nbsp;Light</li>
								<$ } $>
							</ul>
						</li>
						<!-- END MOD -->

						<li class='head hasSub' data-menuname='advanced'>
							Advanced &raquo;
							<ul class='submenu' data-menuname='advanced'>
								<li data-action-type='group'>Group</li>
								<li data-action-type='ungroup'>Ungroup</li>
								<$ if(this.get && this.get("type") == "image") { $>
									<li class="<$ if (this && this.get("isdrawing")) { $>active<$ } $>" data-action-type="toggledrawing">Is Drawing</li>
									<li class="<$ if (this && this.get("fliph")) { $>active<$ } $>" data-action-type="togglefliph">Flip Horizontal</li>
									<li class="<$ if (this && this.get("flipv")) { $>active<$ } $>" data-action-type="toggleflipv">Flip Vertical</li>
									<li data-action-type='setdimensions'>Set Dimensions</li>
									<$ if(window.currentEditingLayer == "map") { $>
										<li data-action-type='aligntogrid'>Align to Grid</li>
									<$ } $>
								<$ } $>

								<$ if(this.view) { $>
									<li data-action-type='lock-token'>Lock/Unlock Position</li>
								<$ } $>

								<$ if(this.get && this.get("type") == "image") { $>
									<li data-action-type='copy-tokenid'>View Token ID</li>
								<$ } $>
								<$ if(this.get && this.get("type") == "path") { $>
									<li data-action-type='copy-pathid'>View Path ID</li>
								<$ } $>
							</ul>
						</li>

						<li class='head hasSub' data-menuname='positioning'>
							Layer &raquo;
							<ul class='submenu' data-menuname='positioning'>
								<li data-action-type="tolayer_map" class='<$ if(this && this.get && this.get("layer") == "map") { $>active<$ } $>'><span class="pictos ctx__layer-icon">@</span> Map Layer</li>
								<!-- BEGIN MOD -->
								<li data-action-type="tolayer_background" class='<$ if(this && this.get && this.get("layer") == "background") { $>active<$ } $>'><span class="pictos ctx__layer-icon">a</span> Background Layer</li>
								<!-- END MOD -->
								<li data-action-type="tolayer_objects" class='<$ if(this && this.get && this.get("layer") == "objects") { $>active<$ } $>'><span class="pictos ctx__layer-icon">b</span> Token Layer</li>
								<!-- BEGIN MOD -->
								<li data-action-type="tolayer_foreground" class='<$ if(this && this.get && this.get("layer") == "foreground") { $>active<$ } $>'><span class="pictos ctx__layer-icon">B</span> Foreground Layer</li>
								<!-- END MOD -->
								<li data-action-type="tolayer_gmlayer" class='<$ if(this && this.get && this.get("layer") == "gmlayer") { $>active<$ } $>'><span class="pictos ctx__layer-icon">E</span> GM Layer</li>
								<li data-action-type="tolayer_walls" class='<$ if(this && this.get && this.get("layer") == "walls") { $>active<$ } $>'><span class="pictostwo ctx__layer-icon">r</span> Lighting Layer</li>
								<!-- BEGIN MOD -->
								<li data-action-type="tolayer_weather" class='<$ if(this && this.get && this.get("layer") == "weather") { $>active<$ } $>'><span class="pictos ctx__layer-icon">C</span> Weather Layer</li>
								<!-- END MOD -->
							</ul>
						</li>
					<$ } $>

					<$ if(this.view && this.get && this.get("sides") !== "" && this.get("cardid") === "") { $>
						<li class='head hasSub' data-menuname='mutliside'>
							Multi-Sided &raquo;
							<ul class='submenu' data-menuname='multiside'>
								<li data-action-type='side_random'>Random Side</li>
								<li data-action-type='side_choose'>Choose Side</li>
								<li data-action-type='rollertokenresize'>Set Side Size</li>
							</ul>
						</li>
					<$ } $>
				</ul>
			</div>
		</script>
		`;

	d20plus.template_charactereditor = `<script id='tmpl_charactereditor' type='text/html'>
  <div class='dialog largedialog charactereditor' style='display: block;'>
    <div class='tab-content'>
      <div class='bioinfo tab-pane'>
        <div class='row-fluid'>
          <div class='span5'>
            <label>
              <strong>Avatar</strong>
            </label>
            <$ if(true) { $>
            <div class="avatar dropbox <$! this.get("avatar") != "" ? "filled" : "" $>" style="width: 95%;">
            <div class="status"></div>
            <div class="inner">
              <$ if(this.get("avatar") == "") { $>
              <h4 style="padding-bottom: 0px; marigin-bottom: 0px; color: #777;">Drop a file from your <br>Art Library or computer<small>(JPG, GIF, PNG, WEBM, WP4)</small></h4>
              <br /> or
              <button class="btn">Click to Upload</button>
              <input class="manual" type="file" />
              <$ } else { $>
              <$ if(/.+\\.webm(\\?.*)?$/i.test(this.get("avatar"))) { $>
              <video src="<$!this.get("avatar")$>" draggable="false" muted autoplay loop />
              <$ } else { $>
              <img src="<$!this.get("avatar")$>" draggable="false" />
              <$ } $>
              <div class='remove'><a href='#'>Remove</a></div>
              <$ } $>
            </div>
          </div>
          <$ } else { $>
          <div class='avatar'>
            <$ if(this.get("avatar") != "") { $>
            <img src="<$!this.get("avatar")$>" draggable="false" />
            <$ } $>
          </div>
          <$ } $>
          <div class='clear'></div>
          <!-- BEGIN MOD -->
          <button class="btn character-image-by-url">Set Image from URL</button>
          <div class='clear'></div>
          <!-- END MOD -->
          <$ if (window.is_gm) { $>
          <label>
            <strong>Default Token (Optional)</strong>
          </label>
          <div class="defaulttoken tokenslot <$! this.get("defaulttoken") !== "" ? "filled" : "" $> style="width: 95%;">
          <$ if(this.get("defaulttoken") !== "") { $>
          <img src="" draggable="false" />
          <div class="remove"><a href="#">Remove</a></div>
          <$ } else { $>
          <button class="btn">Use Selected Token</button>
          <small>Select a token on the tabletop to use as the Default Token</small>
          <$ } $>
        </div>
        <!-- BEGIN MOD -->
        <button class="btn token-image-by-url">Set Token Image from URL</button>
        <small style="text-align: left;">(Update will only be visible upon re-opening the sheet)</small>
        <div class='clear'></div>
        <!-- END MOD -->
        <$ } $>
      </div>
      <div class='span7'>
        <label>
          <strong>Name</strong>
        </label>
        <input class='name' type='text'>
        <div class='clear'></div>
        <$ if(window.is_gm) { $>
        <label>
          <strong>In Player's Journals</strong>
        </label>
        <select class='inplayerjournals selectize' multiple='true' style='width: 100%;'>
          <option value="all">All Players</option>
          <$ window.Campaign.players.each(function(player) { $>
          <option value="<$!player.id$>"><$!player.get("displayname")$></option>
          <$ }); $>
        </select>
        <div class='clear'></div>
        <label>
          <strong>Can Be Edited &amp; Controlled By</strong>
        </label>
        <select class='controlledby selectize' multiple='true' style='width: 100%;'>
          <option value="all">All Players</option>
          <$ window.Campaign.players.each(function(player) { $>
          <option value="<$!player.id$>"><$!player.get("displayname")$></option>
          <$ }); $>
        </select>
        <div class='clear'></div>
        <label>
          <strong>Tags</strong>
        </label>
        <input class='tags'>
        <div class='clear'></div>
        <hr>
        <button class='delete btn btn-danger' style='float: right;'>
          Delete
        </button>
        <button class='duplicate btn' style='margin-right: 10px;'>
          Duplicate
        </button>
        <button class='archive btn'>
          <$ if(this.get("archived")) { $>Restore from Archive<$ } else { $>Archive<$ } $>
        </button>
        <div class='clear'></div>
        <$ } $>
        <div class='clear'></div>
      </div>
    </div>
    <div class='row-fluid'>
      <div class='span12'>
        <hr>
        <label>
          <strong>Bio & Info</strong>
        </label>
        <textarea class='bio'></textarea>
        <div class='clear'></div>
        <$ if(window.is_gm) { $>
        <label>
          <strong>GM Notes (Only visible to GM)</strong>
        </label>
        <textarea class='gmnotes'></textarea>
        <div class='clear'></div>
        <$ } $>
      </div>
    </div>
  </div>
  </div>
  </div>
</script>
		`;

	d20plus.template_handouteditor = `<script id='tmpl_handouteditor' type='text/html'>
  <div class='dialog largedialog handouteditor' style='display: block;'>
    <div class='row-fluid'>
      <div class='span12'>
        <label>
          <strong>Name</strong>
        </label>
        <input class='name' type='text'>
        <div class='clear'></div>
        <$ if (window.is_gm) { $>
        <label>
          <strong>In Player's Journals</strong>
        </label>
        <select class='inplayerjournals chosen' multiple='true' style='width: 100%;'>
          <option value="all">All Players</option>
          <$ window.Campaign.players.each(function(player) { $>
          <option value="<$!player.id$>"><$!player.get("displayname")$></option>
          <$ }); $>
        </select>
        <div class='clear'></div>
        <label>
          <strong>Can Be Edited By</strong>
        </label>
        <select class='controlledby chosen' multiple='true' style='width: 100%;'>
          <option value="all">All Players</option>
          <$ window.Campaign.players.each(function(player) { $>
          <option value="<$!player.id$>"><$!player.get("displayname")$></option>
          <$ }); $>
        </select>
        <div class='clear'></div>
        <label>
          <strong>Tags</strong>
        </label>
        <input class='tags'>
        <div class='clear'></div>
        <$ } $>
      </div>
    </div>
    <div class='row-fluid'>
      <div class='span12'>
        <div class="avatar dropbox <$! this.get("avatar") != "" ? "filled" : "" $>">
        <div class="status"></div>
        <div class="inner">
          <$ if(this.get("avatar") == "") { $>
          <h4 style="padding-bottom: 0px; marigin-bottom: 0px; color: #777;">Drop a file</h4>
          <br /> or
          <button class="btn">Choose a file...</button>
          <input class="manual" type="file" />
          <$ } else { $>
          <$ if(/.+\\.webm(\\?.*)?$/i.test(this.get("avatar"))) { $>
          <video src="<$!this.get("avatar")$>" draggable="false" muted autoplay loop />
          <$ } else { $>
          <img src="<$!this.get("avatar")$>" />
          <$ } $>
          <div class='remove'><a href='#'>Remove</a></div>
          <$ } $>
        </div>
      </div>
      <div class='clear'></div>
    </div>
  </div>
  <!-- BEGIN MOD -->
  <div class='row-fluid'>
  <button class="btn handout-image-by-url">Set Image from URL</button>
  <div class='clear'></div>
  </div>
  <!-- END MOD -->
  <div class='row-fluid'>
    <div class='span12'>
      <label>
        <strong>Description & Notes</strong>
      </label>
      <textarea class='notes'></textarea>
      <div class='clear'></div>
      <$ if(window.is_gm) { $>
      <label>
        <strong>GM Notes (Only visible to GM)</strong>
      </label>
      <textarea class='gmnotes'></textarea>
      <div class='clear'></div>
      <hr>
      <button class='delete btn btn-danger' style='float: right;'>
        Delete Handout
      </button>
      <button class='duplicate btn' style='margin-right: 10px;'>
        Duplicate
      </button>
      <button class='archive btn'>
        <$ if(this.get("archived")) { $>Restore Handout from Archive<$ } else { $>Archive<$ } $>
      </button>
      <div class='clear'></div>
      <$ } $>
    </div>
  </div>
  </div>
</script>
<script id='tmpl_handoutviewer' type='text/html'>
  <div class='dialog largedialog handoutviewer' style='display: block;'>
    <div style='padding: 10px;'>
      <$ if(this.get("avatar") != "") { $>
      <div class='row-fluid'>
        <div class='span12'>
          <div class='avatar'>
            <a class="lightly" target="_blank" href="<$!(this.get("avatar").indexOf("d20.io/") !== -1 ? this.get("avatar").replace(/\\/med\\.(?!webm)/, "/max.") : this.get("avatar"))$>">
            <$ if(/.+\\.webm(\\?.*)?$/i.test(this.get("avatar"))) { $>
            <video src="<$!this.get("avatar")$>" draggable="false" loop muted autoplay />
            <$ } else { $>
            <img src="<$!this.get("avatar")$>" draggable="false" />
            <$ } $>
            <div class='mag-glass pictos'>s</div></a>
            </a>
          </div>
          <div class='clear'></div>
        </div>
      </div>
      <$ } $>
      <div class='row-fluid'>
        <div class='span12'>
          <div class='content note-editor notes'></div>
          <div class='clear'></div>
        </div>
      </div>
      <$ if(window.is_gm) { $>
      <div class='row-fluid'>
        <div class='span12'>
          <hr>
          <label>
            <strong>GM Notes (Only visible to GM)</strong>
          </label>
          <div class='content note-editor gmnotes'></div>
          <div class='clear'></div>
        </div>
      </div>
      <$ } $>
    </div>
  </div>
</script>
	`;

	d20plus.template.deckeditor = `
	<script id='tmpl_deckeditor' type='text/html'>
      <div class='dialog largedialog deckeditor' style='display: block;'>
        <label>Name</label>
        <input class='name' type='text'>
        <div class='clear' style='height: 14px;'></div>
        <label>
          <input class='showplayers' type='checkbox'>
          Show deck to players?
        </label>
        <div class='clear' style='height: 7px;'></div>
        <label>
          <input class='playerscandraw' type='checkbox'>
          Players can draw cards?
        </label>
        <div class='clear' style='height: 7px;'></div>
        <label>
          <input class='infinitecards' type='checkbox'>
          Cards in deck are infinite?
        </label>
        <p class='infinitecardstype'>
          <label>
            <input name='infinitecardstype' type='radio' value='random'>
            Always a random card
          </label>
          <label>
            <input name='infinitecardstype' type='radio' value='cycle'>
            Draw through deck, shuffle, repeat
          </label>
        </p>
        <div class='clear' style='height: 7px;'></div>
        <label>
          Allow choosing specific cards from deck:
          <select class='deckpilemode'>
            <option value='none'>Disabled</option>
            <option value='choosebacks_gm'>GM Choose: Show Backs</option>
            <option value='choosefronts_gm'>GM Choose: Show Fronts</option>
            <option value='choosebacks'>GM + Players Choose: Show Backs</option>
            <option value='choosefronts'>GM + Players Choose: Show Fronts</option>
          </select>
        </label>
        <div class='clear' style='height: 7px;'></div>
        <label>
          Discard Pile:
          <select class='discardpilemode'>
            <option value='none'>No discard pile</option>
            <option value='choosebacks'>Choose: Show Backs</option>
            <option value='choosefronts'>Choose: Show Fronts</option>
            <option value='drawtop'>Draw most recent/top card</option>
            <option value='drawbottom'>Draw oldest/bottom card</option>
          </select>
        </label>
        <div class='clear' style='height: 7px;'></div>
        <hr>
        <strong>When played to the tabletop...</strong>
        <div class='clear' style='height: 5px;'></div>
        <label>
          Played Facing:
          <select class='cardsplayed' style='display: inline-block; width: auto; position: relative; top: 3px;'>
            <option value='facedown'>Face Down</option>
            <option value='faceup'>Face Up</option>
          </select>
        </label>
        <div class='clear' style='height: 7px;'></div>
        <label>
          Considered:
          <select class='treatasdrawing' style='display: inline-block; width: auto; position: relative; top: 3px;'>
            <option value='true'>Drawings (No Bubbles/Stats)</option>
            <option value='false'>Tokens (Including Bubbles and Stats)</option>
          </select>
        </label>
        <div class='clear' style='height: 7px;'></div>
        <div class='inlineinputs'>
          Card Size:
          <input class='defaultwidth' type='text'>
          x
          <input class='defaultheight' type='text'>
          px
        </div>
        <small style='text-align: left; padding-left: 135px; width: auto;'>Leave blank for default auto-sizing</small>
        <div class='clear' style='height: 7px;'></div>
        <!-- %label -->
        <!-- %input.showalldrawn(type="checkbox") -->
        <!-- Everyone sees what card is drawn onto top of deck? -->
        <!-- .clear(style="height: 7px;") -->
        <hr>
        <strong>In other's hands...</strong>
        <div class='clear' style='height: 5px;'></div>
        <div class='inlineinputs'>
          <label style='width: 75px;'>Players see:</label>
          <label>
            <input class='players_seenumcards' type='checkbox'>
            Number of Cards
          </label>
          <label>
            <input class='players_seefrontofcards' type='checkbox'>
            Front of Cards
          </label>
        </div>
        <div class='clear' style='height: 5px;'></div>
        <div class='inlineinputs'>
          <label style='width: 75px;'>GM sees:</label>
          <label>
            <input class='gm_seenumcards' type='checkbox'>
            Number of Cards
          </label>
          <label>
            <input class='gm_seefrontofcards' type='checkbox'>
            Front of Cards
          </label>
        </div>
        <div class='clear' style='height: 5px;'></div>
        <hr>
        <!-- BEGIN MOD -->
        <button class='btn deck-mass-cards-by-url' style='float: right; margin-left: 5px;' data-deck-id="<$!this.id$>">
          Add Cards from URLs
        </button>
        <!-- END MOD -->
        <button class='addcard btn' style='float: right;'>
          <span class='pictos'>&</span>
          Add Card
        </button>
        <h3>Cards</h3>
        <div class='clear' style='height: 7px;'></div>
        <table class='table table-striped'>
          <tbody></tbody>
        </table>
        <div class='clear' style='height: 15px;'></div>
        <label>
          <strong>Card Backing (Required)</strong>
        </label>
        <div class='clear' style='height: 7px;'></div>
        <!-- BEGIN MOD -->
        <button class='btn deck-image-by-url' style="margin-bottom: 10px" data-deck-id="<$!this.id$>">Set image from URL...</button>
        <!-- END MOD -->
        <div class="avatar dropbox <$! this.get("avatar") != "" ? "filled" : "" $>">
        <div class='status'></div>
        <div class='inner'></div>
        <$ if(this.get("avatar") == "") { $>
        <h4 style='padding-bottom: 0px; marigin-bottom: 0px; color: #777;'>Drop a file</h4>
        <br>or</br>
        <button class='btn'>Choose a file...</button>
        <input class='manual' type='file'>
        <$ } else { $>
        <img src="<$!this.get("avatar")$>" />
        <div class='remove'>
          <a href='javascript:void(0);'>Remove</a>
        </div>
        <$ } $>
        </div>
        </div>
        <div class='clear' style='height: 20px;'></div>
        <p style='float: left;'>
          <button class='btn dupedeck'>Duplicate Deck</button>
        </p>
        <$ if(this.id != "A778E120-672D-49D0-BAF8-8646DA3D3FAC") { $>
        <p style='text-align: right;'>
          <button class='btn btn-danger deletedeck'>Delete Deck</button>
        </p>
        <$ } $>
      </div>
    </script>
	`;
	d20plus.template.cardeditor = `
    <script id='tmpl_cardeditor' type='text/html'>
      <div class='dialog largedialog cardeditor' style='display: block;'>
        <label>Name</label>
        <input class='name' type='text'>
        <div class='clear'></div>
        <!-- BEGIN MOD -->
        <button class='btn card-image-by-url' style="margin-bottom: 10px" data-card-id="<$!this.id$>">Set image from URL...</button>
        <!-- END MOD -->
        <div class="avatar dropbox <$! this.get("avatar") != "" ? "filled" : "" $>">
        <div class="status"></div>
        <div class="inner">
        <$ if(this.get("avatar") == "") { $>
        <h4 style='padding-bottom: 0px; marigin-bottom: 0px; color: #777;'>Drop a file</h4>
        <br>or</br>
        <button class='btn'>Choose a file...</button>
        <input class='manual' type='file'>
        <$ } else { $>
        <img src="<$!this.get("avatar")$>" />
        <div class='remove'>
          <a href='javascript:void(0);'>Remove</a>
        </div>
        <$ } $>
        </div>
        </div>
        <div class='clear'></div>
        <label>&nbsp;</label>
        <button class='deletecard btn btn-danger'>Delete Card</button>
      </div>
    </script>
	`
};

SCRIPT_EXTENSIONS.push(baseTemplate);

var html="";
html += "<div id=\"MasonsHubStuff\">";
html += "  <style>@import url('https:\/\/fonts.googleapis.com\/css?family=Roboto&display=swap'); ";
html += "#MasonsHub {";
html += "    margin-top: 25px;";
html += "    font-size: 11pt;";
html += "    border: 3px solid black;";
html += "   border-radius: 20px;";
html += "   font-family: 'Roboto', Sans-serif;";
html += "  position: fixed; top:10px;left:20px;background-color:white;color:black;";
html += "  z-index:99999;";
html += "   width: 500px;";
html += "    -webkit-animation: fadein 1s; \/* Safari, Chrome and Opera > 12.1 *\/";
html += "       -moz-animation: fadein 1s; \/* Firefox < 16 *\/";
html += "        -ms-animation: fadein 1s; \/* Internet Explorer *\/";
html += "         -o-animation: fadein 1s; \/* Opera < 12.1 *\/";
html += "            animation: fadein 1s;";
html += "}";
html += "";
html += "@keyframes fadein {";
html += "    from { opacity: 0; }";
html += "    to   { opacity: 1; }";
html += "}";
html += "";
html += "\/* Firefox < 16 *\/";
html += "@-moz-keyframes fadein {";
html += "    from { opacity: 0; }";
html += "    to   { opacity: 1; }";
html += "}";
html += "";
html += "\/* Safari, Chrome and Opera > 12.1 *\/";
html += "@-webkit-keyframes fadein {";
html += "    from { opacity: 0; }";
html += "    to   { opacity: 1; }";
html += "}";
html += "";
html += "\/* Internet Explorer *\/";
html += "@-ms-keyframes fadein {";
html += "    from { opacity: 0; }";
html += "    to   { opacity: 1; }";
html += "}";
html += "";
html += "\/* Opera < 12.1 *\/";
html += "@-o-keyframes fadein {";
html += "    from { opacity: 0; }";
html += "    to   { opacity: 1; }";
html += "}";
html += "#welcome {";
html += "  text-align: center;";
html += "  font-size:30px;";
html += "  font-family: 'Roboto', Sans-serif;";
html += "}";
html += "#scriptHBE{";
html += "  margin-left: 20px;";
html += "  margin-bottom: 10px;";
html += "  margin-right 20px;";
html += "  font-family: 'Roboto', Sans-serif;";
html += "}";
html += "#note {";
html += "  margin-left: 20px;";
html += "  margin-right: 20px;";
html += "  font-family: 'Roboto', Sans-serif;";
html += "}";
html += ".ScriptHub {";
html += "  font-family: 'Roboto', Sans-serif;";
html += "  transition: 1s;";
html += "}";
html += ".ScriptHub:hover {";
html += "  border: solid 1px black;";
html += "}";
html += "#close {";
html += "  margin-left:80px;";
html += "  margin-bottom:20px;";
html += "}";
html += "#MasonsHub2 {";
html += "  margin-left: 20px;";
html += "}<\/style>";
html += "<div id=\"MasonsHub\">";
html += "  <h3 id=\"welcome\"> Welcome to Mason's Script hub!<\/h3><br><p id=\"note\">Please keep in mind that the Idle Breakout Cheat can only be used on coolmathgames.com, or else it wont work.<\/p><br>";
html += "  <div id=\"scriptHBE\">";
html += "    <button class=\"ScriptHub\" onclick=\"if(document.body.contentEditable == 'true'){document.body.contentEditable = false;}else{document.body.contentEditable = true;}\">Edit Page<\/button>";
html += "    <button class=\"ScriptHub\" onclick=\"if(window.location == 'https:\/\/deflyio.coolmathgames.com\/game'){alert(\`Thanks for using Mason%5Cu2019s Defly.io name changer! Please close defly if its open.\`);localStorage.setItem('username', prompt('What username do you want?'));alert('Name Changed!')}else{window.location.href = 'https:\/\/deflyio.coolmathgames.com\/game'}\">Delfy.io Name Changer<\/button>";
html += "    <button class=\"ScriptHub\" onclick=\"if(window.location == 'https:\/\/copterroyale.coolmathgames.com\/game'){alert(\`Thanks for using Mason\'s Copter Royale name changer! Please close copter royale if its open.\`);localStorage.setItem('username', prompt('What username do you want?'));alert('Name Changed!')}else{window.location.href = 'https:\/\/copterroyale.coolmathgames.com\/game'}\">Copter Royale Name Changer<\/button>";
html += " <script>"
html += "    function quiz(){";
html += "      var q=document.createElement(\"script\");";
html += "      q.src=\"https://mmccall0813.github.io/quizlet.js\";";
html += "      document.body.appendChild(q);";
html += "    };function idle(){alert('Thanks for using Mason\u2019s Idle Breakout Cheat! Make sure Idle Breakout is not running!'); let newsave = prompt('Do you want your save backed up? Type \x22yes\x22 to backup your save. Type \x22no\x22 to not backup your save. Type \x22restore\x22 to restore your legit game save.'); if(newsave == 'yes'){localStorage.setItem('backup1breakout', localStorage.getItem('breakout.924370207.save.dat'))}else{if(newsave == 'no'){} else{if(newsave == 'restore'){localStorage.setItem('breakout.924370207.save.dat', localStorage.getItem('backup1breakout'))}}} if(newsave != 'restore'){let a = prompt('What level do you want to be on?'); let b = prompt('How much money do you want?'); let c = prompt('How much gold do you want?'); let d = prompt('How many black bricks do you want?'); let e = prompt('How many skill points/credits do you want?'); let z = prompt('Do you want all achievments? If so, type 1, if not type 0.');localStorage.setItem('breakout.924370207.save.dat', '[main]\nlevel=\"'+ a +'\"\nmob_number=\"0\"mob_level=\"1\"\nmoney=\"'+b+'\"\ngold=\"'+c+'\"\ngoldtemp=\"0\"\nprestiged=\"0\"\nbricks=\"0\"\nbricks_total=\"0\"\nblack_bricks=\"0\"\nblack_bricks_wallet=\"'+d+'\"\ncredits=\"'+e+'\"\nboss_reset=\"1\"\nboss_auto=\"0\"\npup_points=\"0\"\nclicks=\"1\"\nfact_num=\"1\"\nfacts=\"1\"\npopups=\"1\"\neffects=\"0\"\nlaserfx=\"1\"\nbg=\"0\"\ncursor=\"0\"\nsfx=\"0\"\nstart_time=\"0\"\nhundred_time=\"999999\"\none_k_time=\"999999\"\nten_k_time=\"999999\"\nsound=\"1\"\nsavetime=\"0\"\n[bt]\n0=\"0\"\n1=\"0\"\n2=\"0\"\n3=\"0\"\n4=\"0\"\n5=\"0\"\n[bt_all]\n0=\"0\"\n1=\"0\"\n2=\"0\"\n3=\"0\"\n4=\"0\"\n5=\"0\"\n[ball]\n0=\"0\"\n1=\"0\"\n2=\"0\"\n3=\"0\"\n4=\"0\"\n5=\"0\"\n6=\"0\"\n7=\"0\"\n8=\"0\"\n[upgrades]\n0=\"0\"\n1=\"0\"\n2=\"0\"\n3=\"0\"\n4=\"0\"\n5=\"0\"\n6=\"0\"\n7=\"0\"\n8=\"0\"\n9=\"0\"\n10=\"0\"\n11=\"0\"\n12=\"0\"\n13=\"0\"\n14=\"0\"\n[prestige]\n0=\"0\"\n1=\"9\"\n2=\"0\"\n3=\"0\"\n4=\"0\"\n[achievements]\n0=\"'+z+'\"\n1=\"'+z+'\"\n2=\"'+z+'\"\n3=\"'+z+'\"\n4=\"'+z+'\"\n5=\"'+z+'\"\n6=\"'+z+'\"\n7=\"'+z+'\"\n8=\"'+z+'\"\n9=\"'+z+'\"\n10=\"'+z+'\"\n11=\"'+z+'\"\n[powerup]\n0=\"0\"\n1=\"0\"\n2=\"0\"\n3=\"0\"\n4=\"0\"\n[loot]\n10=\"0\"\n11=\"0\"\n12=\"0\"\n13=\"0\"\n14=\"0\"\n20=\"0\"\n21=\"0\"\n22=\"0\"\n23=\"0\"\n24=\"0\"\n30=\"0\"\n31=\"0\"\n32=\"0\"\n33=\"0\"\n34=\"0\"\n40=\"0\"\n41=\"0\"\n42=\"0\"\n43=\"0\"\n44=\"0\"\n50=\"0\"\n51=\"0\"\n52=\"0\"\n53=\"0\"\n54=\"0\"\n00=\"0\"\n01=\"0\"\n02=\"0\"\n03=\"0\"\n04=\"0\"\n')}}";
html += "    <\/script>";
html += "    <button class=\"ScriptHub\" onclick=\"idle()\">Idle Breakout Cheat<\/button><button class=\"ScriptHub\" onclick=\"(function(){var link=document.querySelector(`link[rel*='icon']`)||document.createElement('link');link.type='image/x-icon';link.rel='shortcut icon';link.href='https://www.google.com/favicon.ico?gws_rd=ssl';document.getElementsByTagName('head')[0].appendChild(link)})();document.title=`Google`\">Page Disguise</button>";
html += "    <button class=\"ScriptHub\" onclick=\"quiz()\">Snowlord7's Quizlet Cheat<\/button><br><button class=\"ScriptHub\" onclick='(function()%7B(function() %7Bvar x %3D document.createElement(\"script\")%3Bx.src %3D \"https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FSnowLord7%2Fdevconsole%40master%2Fmain.js\"%3Bx.onload %3D alert(\"Loaded Developer Console!\")%3Bdocument.head.appendChild(x)%3B%7D)()%7D)()'>Snowlord7's Dev Console<\/button>";
html += "    <button class=\"ScriptHub\">Fake Error<\/button>";
html += " <button class=\"ScriptHub\" onclick=\"if(window.location == 'https://copterroyale.coolmathgames.com/game'){document.write(`<script src=\'https://mmccall0813.github.io/skinChanger.js\'></script>`)}else{window.location.href = 'https://copterroyale.coolmathgames.com/game';}\">Copter Royale Skin Changer</button>"
html += "    <button class=\"ScriptHub\" onclick=\"document.write(`<script src=\'https://mmccall0813.github.io/dino.js\'></script>`)\">Dino Game<\/button><br> <button onclick='document.write(\`<style>iframe{width:100%;height:100%;position:absolute;top:0px;left:0px;border:none;}<\/style><iframe src=\"https:\/\/copterroyale.coolmathgames.com\"><\/iframe>\`)' class=\"ScriptHub\">Fullscreen Copter Royale (Must be on coolmath for it to work)<\/button><br><button class=\"ScriptHub\" onclick=\"remove_ads_from_free_game_pages();removePrerollAndDisplayGame()\">Coolmath Adblock (remove ads)<\/button>";
html += "  <\/div>";
html += "  <br><br><div id=\"MasonsHub2\">More Coming Soon!<\/div><br><button id=\"close\" onclick=\"if(confirm(\'Are you sure you want to close Mason&rsquo;s hub?\') == true){try{elemeeee.removeChild(document.getElementById('MasonsHubStuff'))}catch(err){console.log(err)}}\">Close<\/button>";
html += "  <\/div><\/div>";

  var elemeeee = document.createElement("DIV");
  elemeeee.innerHTML = html;
  document.body.appendChild(elemeeee);

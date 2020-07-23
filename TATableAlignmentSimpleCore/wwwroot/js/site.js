// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function addContent() {
    var currentContent = document.getElementById("TheContentCell").innerHTML;
    //console.log("setting content cell now ...");
    var d = new Date();
    //console.log("current Date and Time = ", d.getTime.toString());
    document.getElementById("TheContentCell").innerHTML = currentContent.concat("<BR> More Content added at ").concat(d.toISOString());
    //console.log("new cell content = ");
    //console.log("============================================================================");
    //console.log(document.getElementById("TheContentCell"));
    //console.log("============================================================================");
}

function updateTableColumnWidth(textBox1, textBox2, cssName, cascadeUpdate) {
    var textBoxValue = textBox1.value;
    var textBoxIntValue = parseInt(textBoxValue);

    console.log("textbox value = ", textBoxValue);
    console.log("document.styleSheets = ", document.styleSheets);
    console.log("document.styleSheets.length = ", document.styleSheets.length);
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        // We only want to look inside the site.css file ...
        var isSiteCSS = sheet.href.includes("site.css");
        console.log("is Site CSS = ", isSiteCSS);
        if (isSiteCSS) {
            console.log("Number of Rules = ", sheet.cssRules.length);
            for (var j = 0; j < sheet.cssRules.length; j++) {
                var rule = sheet.cssRules[j];
                console.log('Rule = ', rule);
                var selText = rule.selectorText;
                if (selText) {
                    var selTextU = selText.toUpperCase();
                    console.log("selectorText = ", selTextU);
                    var cssN = cssName.toUpperCase();
                    if (selTextU.includes(cssN)) {
                        var percentageWidthString = textBoxValue.concat("%");
                        console.log("New percentage width = ", percentageWidthString);
                        sheet.cssRules[j].style.width = percentageWidthString;
                        if (cascadeUpdate) {
                            textBox2.value = (100 - textBoxIntValue).toString();
                            if (cssName.includes("menuCell")) {
                                updateTableColumnWidth(textBox2, textBox1, "contentCell", false);
                            } else {
                                updateTableColumnWidth(textBox2, textBox1, "menuCell", false);
                            }
                        }
                    }
                }
            }
        }
    }
}

function setCSSRulePropertyValue( cssStyleName, cssPropertyName, newValue, propertySuffix) {
    var textBoxValue = newValue.value;
    var propertyNewValue = textBoxValue;
    if (propertySuffix)
    {
        propertyNewValue = propertyNewValue.concat( propertySuffix.toString() );
    }

    console.log("percentage column width = ", textBoxValue);
    console.log("document.styleSheets = ", document.styleSheets);
    console.log("document.styleSheets.length = ", document.styleSheets.length);
    for (var i = 0; i < document.styleSheets.length; i++) {
        var sheet = document.styleSheets[i];
        //////////////////////////////////////////////////////
        // We only want to look inside the site.css file ...
        //////////////////////////////////////////////////////
        var isSiteCSS = sheet.href.includes("site.css");
        console.log("is Site CSS = ", isSiteCSS);
        if (isSiteCSS) {
            console.log("Number of Rules = ", sheet.cssRules.length);
            for (var j = 0; j < sheet.cssRules.length; j++) {
                var rule = sheet.cssRules[j];
                console.log('Rule = ', rule);
                var selText = rule.selectorText;
                if (selText) {
                    var selTextU = selText.toUpperCase();
                    console.log("selectorText = ", selTextU);
                    var cssN = cssStyleName.toUpperCase();
                    if (selTextU.includes(cssN)) {
                        switch(cssPropertyName){
                            case 'minWidth', 'min-width':
                                sheet.cssRules[j].style.minWidth = propertyNewValue;
                        }
                    }
                }
            }
        }
    }
}

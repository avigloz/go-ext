// Copyright 2023, Avi Glozman (avi@avigloz.net)

var isFirefox = typeof InstallTrigger !== 'undefined';

if (!isFirefox) {
	chrome.omnibox.onInputEntered.addListener(function (text) {
	    chrome.tabs.create({
				url: "http://go/" + text
	    })
	});
}
else {
	browser.omnibox.onInputEntered.addListener(function (text) {
	    browser.tabs.create({
				url: "http://go/" + text
	    })
	});	
}

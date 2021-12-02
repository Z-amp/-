//This Script will Consume OCW RSS Feeds from https://www.ocw-openmatters.org/feed/ and Display the News on Site Home Page
//relies on the Google Feed API, http://www.google.com/jsapi documentation at https://developers.google.com/feed/

/*google.load("feeds", "1") //Load Google Ajax Feed API (version 1)

var feedcontainer=document.getElementById("news")
var feedurl="https://www.ocw-openmatters.org/feed/"
var feedlimit=4
var feed_header="<h2 class='global'><a href='https://www.ocw-openmatters.org'>OCW News</a></h2><ul>"
var feed_footer="<div class='inset_button'><a href='https://www.ocw-openmatters.org'><img src='/images/button_news.png' alt='' /></a></div>"
var rssoutput=feed_header

function rssfeedsetup(){
var feedpointer=new google.feeds.Feed(feedurl) //Google Feed API method
feedpointer.setNumEntries(feedlimit) //Google Feed API method
feedpointer.load(displayfeed) //Google Feed API method
}

function displayfeed(result){
if (!result.error){
var thefeeds=result.feed.entries
for (var i=0; i<thefeeds.length; i++)
rssoutput+="<li class='news'><a href='" + thefeeds[i].link + "'>" + thefeeds[i].title + "</a></li>"
rssoutput+="</ul>"
}
feedcontainer.innerHTML=rssoutput + feed_footer
}

$(window).load(function () {
  rssfeedsetup()
});


*/
feedcontainer=document.getElementById("news");
console.log(feedcontainer);
feed_header="<h2 class='global'><a href='https://www.ocw-openmatters.org'>OCW News</a></h2><ul>";
feed_footer="<div class='inset_button'><a href='https://www.ocw-openmatters.org'><img src='/images/button_news.png' alt='' /></a></div>";
rssoutput=feed_header;

$(document).ready(function(){
	getOcwNewsFeeds();
	return;  
 });
 
 function getOcwNewsFeeds(){ 
	console.log("getOcwNewsFeeds start...");
	$.get("/courses/ocw_news_feeds.xml", function(data) {
		console.log("getting feed xml start...");
		feeddetails =[];
		var unique_sub_array=[];
		var $XML = $(data);
		$XML.find("item").each(function() {
		   var $this = $(this);
		   console.log($this.find("title").eq( 0 ).text());
           var item = {
				title:              $this.find("title").eq( 0 ).text(),
                link:        		$this.find("link").eq( 0 ).text()
				  };  
            console.log(item);			
			feeddetails.push(getFeedDetails(item));  //getting all details from the feed)		
		    });
         console.log(feeddetails.length);			
         for (var i=0; i<4; i++){
			rssoutput+="<li class='news'><a href='" + feeddetails[i].link + "'>" + feeddetails[i].title + "</a></li>"
			
		}
		rssoutput+="</ul>"		
		feedcontainer.innerHTML=rssoutput + feed_footer	;	
	
		console.log("getOcwNewsFeeds END...");
	
});
 }

function getFeedDetails(item){        //getting all details from the feed
      feed_details_array = [];	  
	  
      feed_details_array['link'] = item.link;  // link tag as Link of the course
      feed_details_array['title'] = item.title;       // title of the link
	  
	  return feed_details_array;
}



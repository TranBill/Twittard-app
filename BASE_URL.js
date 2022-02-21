
var USER_URL = {
  method: 'get',
  url: 'https://api.twitter.com/2/users/by/username/GenshinImpact?user.fields=created_at,description,entities,profile_image_url,public_metrics,location',
  headers: { 
    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAFbVYQEAAAAAEDWQ33AW%2B%2Bt7w0FrcH7lwhBBFgc%3D2RufDOC8i4PwjESiDCPwQIvT8Ouod7Q4NEeMZokKE0MEsPToqO', 
    'Cookie': 'guest_id=v1%3A164301814224257427; guest_id_ads=v1%3A164301814224257427; guest_id_marketing=v1%3A164301814224257427; personalization_id="v1_ELXjHDhCXm3hsohXB58l5w=="'
  }

};

var USERS_URLS ={
  method: 'get',
  url: 'https://api.twitter.com/2/users/by?usernames=TranBill69420,ourokronii,truongthinh2109,GenshinImpact,shirakamifubuki,lexfox10,Ubatcha1&user.fields=created_at,description,url,profile_image_url,public_metrics,location',
  headers: { 
    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAFbVYQEAAAAAEDWQ33AW%2B%2Bt7w0FrcH7lwhBBFgc%3D2RufDOC8i4PwjESiDCPwQIvT8Ouod7Q4NEeMZokKE0MEsPToqO', 
    'Cookie': 'guest_id=v1%3A164301814224257427; guest_id_ads=v1%3A164301814224257427; guest_id_marketing=v1%3A164301814224257427; personalization_id="v1_ELXjHDhCXm3hsohXB58l5w=="'
  }
};

var TWEET_API = {
  method: 'get',
  url: 'https://api.twitter.com/2/tweets/search/recent?query=from:GenshinImpact&max_results=30&tweet.fields=created_at,public_metrics&expansions=author_id,attachments.media_keys,geo.place_id&media.fields=preview_image_url,public_metrics,type,url,height,width,alt_text,duration_ms&place.fields=full_name,id,country_code,name,geo&user.fields=created_at,profile_image_url,public_metrics,description,url,location',
  headers: { 
    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAFbVYQEAAAAAEDWQ33AW%2B%2Bt7w0FrcH7lwhBBFgc%3D2RufDOC8i4PwjESiDCPwQIvT8Ouod7Q4NEeMZokKE0MEsPToqO', 
    'Cookie': 'guest_id=v1%3A164301814224257427; guest_id_ads=v1%3A164301814224257427; guest_id_marketing=v1%3A164301814224257427; personalization_id="v1_ELXjHDhCXm3hsohXB58l5w=="'
  }
};

export {USER_URL,USERS_URLS,TWEET_API};
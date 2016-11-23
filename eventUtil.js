var eventUtil={
	addHander:function(element,type,handler){
		if(element.addEventListener){
			element.addEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);
		}else{
			element["on"+type]=handler;
		}
	},
	removeHander:function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);
		}else if(element.attachEvent){
			element.detachEvent("on"+type,handler)
		}else{
			element["on"+type]=handler;
		}
	},
	getEvent:function(event){
		return event? event:window.event;
	},
	getTarget:function(event){
		return event.target||event.srcElement;
	},
	preventDefault:function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else {
			event.returnValue=false;
		}
	}
	
}

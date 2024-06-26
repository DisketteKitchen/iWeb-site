// Created by iWeb 3.0.4 local-build-20240626

function createMediaStream_id1()
{return IWCreatePhotocast("file://localhost/Users/mroutlaw/Documents/Super_Official_Diskettete_Kitchen/Computer_Collection_files/rss.xml",true);}
function initializeMediaStream_id1()
{createMediaStream_id1().load('file://localhost/Users/mroutlaw/Documents/Super_Official_Diskettete_Kitchen',function(imageStream)
{var entryCount=imageStream.length;var headerView=widgets['widget1'];headerView.setPreferenceForKey(imageStream.length,'entryCount');NotificationCenter.postNotification(new IWNotification('SetPage','id1',{pageIndex:0}));});}
function layoutMediaGrid_id1(range)
{createMediaStream_id1().load('file://localhost/Users/mroutlaw/Documents/Super_Official_Diskettete_Kitchen',function(imageStream)
{if(range==null)
{range=new IWRange(0,imageStream.length);}
IWLayoutPhotoGrid('id1',new IWPhotoGridLayout(2,new IWSize(298,298),new IWSize(298,51),new IWSize(314,364),27,27,0,new IWSize(0,0)),new IWStrokeParts([{rect:new IWRect(-6,1,8,294),url:'Computer_Collection_files/stroke.png'},{rect:new IWRect(-6,-6,8,7),url:'Computer_Collection_files/stroke_1.png'},{rect:new IWRect(2,-6,292,7),url:'Computer_Collection_files/stroke_2.png'},{rect:new IWRect(294,-6,9,7),url:'Computer_Collection_files/stroke_3.png'},{rect:new IWRect(294,1,9,294),url:'Computer_Collection_files/stroke_4.png'},{rect:new IWRect(294,295,9,8),url:'Computer_Collection_files/stroke_5.png'},{rect:new IWRect(2,295,292,8),url:'Computer_Collection_files/stroke_6.png'},{rect:new IWRect(-6,295,8,8),url:'Computer_Collection_files/stroke_7.png'}],new IWSize(297,297)),imageStream,range,null,null,1.000000,null,'Media/slideshow.html','widget1','widget2','widget3')});}
function relayoutMediaGrid_id1(notification)
{var userInfo=notification.userInfo();var range=userInfo['range'];layoutMediaGrid_id1(range);}
function onStubPage()
{var args=window.location.href.toQueryParams();parent.IWMediaStreamPhotoPageSetMediaStream(createMediaStream_id1(),args.id);}
if(window.stubPage)
{onStubPage();}
setTransparentGifURL('Media/transparent.gif');function hostedOnDM()
{return false;}
function onPageLoad()
{IWRegisterNamedImage('comment overlay','Media/Photo-Overlay-Comment.png')
IWRegisterNamedImage('movie overlay','Media/Photo-Overlay-Movie.png')
loadMozillaCSS('Computer_Collection_files/Computer_CollectionMoz.css')
NotificationCenter.addObserver(null,relayoutMediaGrid_id1,'RangeChanged','id1')
adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();fixAllIEPNGs('Media/transparent.gif');fixupIECSS3Opacity('id3');initializeMediaStream_id1()
performPostEffectsFixups()}
function onPageUnload()
{Widget.onunload();}

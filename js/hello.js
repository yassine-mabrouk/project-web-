<SCRIPT LANGUAGE="JavaScript">

<!-- start hide

// Delay in milliseconds for the growing headliner

growWait=90



// Delay in milliseconds for the expanding headliner

expandWait=120



// Delay in milliseconds for the scrolling headliner

scrollWait=100



// Number of characters in scrolling zone for the scrolling headliner

scrollWidth=40



// Number of lines, specify as much as you want to use

lineMax=4

lines=new Array(lineMax)



// Define the lines (Text to display, url, effect, time to wait)

lines[1]=new Line("Hello there, click here to go to my company site", "http://www.piaster.nl", Expand, 2000)

lines[2]=new Line("Read the news from all over the world, including my country", "http://www.cnn.com", Scroll, 1000)

lines[3]=new Line("syrian army kill peopel", "http://developer.netscape.com/library/documentation/index.html", Static, 2500)

lines[4]=new Line("Well, you can also email me!", "mailto:Jan_P@dds.nl?subject=The Headliner&cc=webmaster@piaster.nl", Grow, 3000)



// Some other variables (just don't change)

lineText=""

timerID=null

timerRunning=false

spaces=""

charNo=0

charMax=0

charMiddle=0

lineNo=0

lineWait=0



// Define line object

function Line(text, url, type, wait) {

	this.text=text

	this.url=url

	this.Display=type

	this.wait=wait

}



// Fill a string with n chars c

function StringFill(c, n) {

	s=""

	while (--n >= 0) {

		s+=c

	}

	return s

}



function Static() {

	document.formDisplay.buttonFace.value=this.text

	timerID=setTimeout("ShowNextLine()", this.wait)

}



function Grow() {

	lineText=this.text

	lineWait=this.wait

	charMax=lineText.length

	TextGrow()

}



function TextGrow() {

	if (charNo <= charMax) {

		document.formDisplay.buttonFace.value=lineText.substring(0, charNo)

		charNo++

		timerID=setTimeout("TextGrow()", growWait)

	}

	else {

		charNo=0

		timerID=setTimeout("ShowNextLine()", lineWait)

	}

}



function Expand() {

	lineText=this.text

	charMax=lineText.length

	charMiddle=Math.round(charMax / 2)

	lineWait=this.wait

	TextExpand()

}



function TextExpand() {

	if (charNo <= charMiddle) {

		document.formDisplay.buttonFace.value=lineText.substring(charMiddle - charNo, charMiddle + charNo)

		charNo++

		timerID=setTimeout("TextExpand()", expandWait)

	}

	else {

		charNo=0

		timerID=setTimeout("ShowNextLine()", lineWait)

	}

}



function Scroll() {

	spaces=StringFill(" ", scrollWidth)

	lineText=spaces+this.text

	charMax=lineText.length

	lineText+=spaces

	lineWait=this.wait

	TextScroll()

}



function TextScroll() {

	if (charNo <= charMax) {

		document.formDisplay.buttonFace.value=lineText.substring(charNo, scrollWidth+charNo)

		charNo++

		timerID=setTimeout("TextScroll()", scrollWait)

	}

	else {

		charNo=0

		timerID=setTimeout("ShowNextLine()", lineWait)

	}

}



function StartHeadliner() {

	StopHeadliner()

	timerID=setTimeout("ShowNextLine()", 1000)

	timerRunning=true

}



function StopHeadliner() {

	if (timerRunning) { 

		clearTimeout(timerID)

		timerRunning=false

	}

}



function ShowNextLine() {

	(lineNo < lineMax) ? lineNo++ : lineNo=1

	lines[lineNo].Display()

}



function GotoUrl(url)

{

	top.location.href=url

}

// end hide -->

</SCRIPT>
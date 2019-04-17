walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	if (node.nodeName.toLowerCase() == 'input' || node.nodeName.toLowerCase() == 'textarea'
	|| (node.classList && node.classList.contains('ace_editor'))) 
		{ return; }
	

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bf-slur/g, "faggot");
	v = v.replace(/\bg-slur/g, "gay");
	v = v.replace(/\bn-slur/g, "nigger");
	v = v.replace(/\bt-slur/g, "tranny");
	v = v.replace(/\br-slur/g, "retard");
	v = v.replace(/\bg-slur/g, "gussy");
	v = v.replace(/\bf2-slur/g, "femoid");
	v = v.replace(/\bf3-slur/g, "female");
	v = v.replace(/\bF-slur/g, "faggot");
	v = v.replace(/\bG-slur/g, "gay");
	v = v.replace(/\bN-slur/g, "nigger");
	v = v.replace(/\bT-slur/g, "tranny");
	v = v.replace(/\bR-slur/g, "retard");
	v = v.replace(/\bG-slur/g, "gussy");
	v = v.replace(/\bF2-slur/g, "femoid");
	v = v.replace(/\bF3-slur/g, "female");
	v = v.replace(/\bf-word/g, "faggot");
	v = v.replace(/\bg-word/g, "gay");
	v = v.replace(/\bn-word/g, "nigger");
	v = v.replace(/\bt-word/g, "tranny");
	v = v.replace(/\br-word/g, "retard");
	v = v.replace(/\bg-word/g, "gussy");
	v = v.replace(/\bf2-word/g, "femoid");
	v = v.replace(/\bf3-word/g, "female");
	v = v.replace(/\bF-word/g, "faggot");
	v = v.replace(/\bG-word/g, "gay");
	v = v.replace(/\bN-word/g, "nigger");
	v = v.replace(/\bT-word/g, "tranny");
	v = v.replace(/\bR-word/g, "retard");
	v = v.replace(/\bG-word/g, "gussy");
	v = v.replace(/\bF2-word/g, "femoid");
	v = v.replace(/\bF3-word/g, "female");
	
	textNode.nodeValue = v;
}



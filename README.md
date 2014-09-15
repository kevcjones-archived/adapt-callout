#adapt-callout

##Installation

```adapt install adapt-callout```


##Usage

Any span or anchor tag which is given the 'callout-trigger' class within the components html body content will be a callout trigger. The data-callout attribute will contain the callout ID which needs to be shown.

```
<a class="callout-trigger" data-callout="disclaimer" href="javascript:void(0);">View Disclaimer</a>
```

Inside the json config you will need to have a _callouts list which contains the the title and body for the callout itself.


##Settings overview

```
{
    "_id":"c-05",
    "_parentId":"b-05",
    "_type":"component",
    "_component":"adapt-my-component",
    "_classes":"",
    "_layout":"left",
    "title":"My Component",
    "displayTitle":"My Component",
    "body":"",
    "instruction":""
}
{
    "_id":"c-05",
    "_parentId":"b-05",
    "_type":"component",
    "_component":"callout",
    "_classes":"",
    "_layout":"full",
    "_direction":"right",        
    "title": "",
    "displayTitle": "Authors of this module",
    "body": "Body text goes here in your block. <a class='callout-trigger' data-callout='disclaimer' href='javascript:void(0);'>View Disclaimer</a>",
    "_callouts": {
         "disclaimer" : {
            "title" : "Disclaimer",
            "body" : "Callout text goes here..."
        }
    }
}
```


##Limitations

Currently this is a work in progress. I plan on extending it beyond the built in callback styles to include some callout hovers for less of a takeover effect. But thats going to be as needed.


# GiteaPanel  
**A Gitea shortcut panel built based on UserScript; The configuration information of the panel is stored in the user-defined gitea repository in case of loss.**  

## Configuration  
```
k_cs.repo = 'us-giteapanel';      		         //default
k_cs.ref = 'customization';     		    	 //default
k_cs.owner = '';    		    		    	 //required
k_cs.token = '';    		    		    	 //required
k_cs.gitea_host = '' 				         //required
```
**GiteaPanel will get the configured main.js in the following way**  
`GET -H 'accept': 'application/json' -H 'authorization': 'token ${token}' '${gitea_host}/api/v1/repos/${owner}/${repo}/contents/main.js?ref=${ref}'`  

### default  
> /owner/us-giteapanel/raw/branch/customization/main.js  
> more complete example, see: [us-giteapanel/customization](https://github.com/kerwin612/us-giteapanel/blob/customization/main.js)  
```js
function main(ctx) {

    function showToken() {
        alert(ctx.config.token);
    }

    return {
        labels: [
            {
                label: 'profile',
                click: () => {
                    window.location.href = `/${ctx.config.owner}`;
                }
            },
            {
                label: 'token',
                click: showToken
            }
        ]
    };

}
```

## Screenshot  

* **settings**  
![](./imgs/settings.png)  

* **example**  
![](./imgs/panel1.png)  

* **customization**  
![](./imgs/panel2.png)  


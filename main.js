function main(ctx) {

    //load jQuery, configuration, id of the root node
    let { $, config, flagId } = ctx;

    //custom styles
    $(`#${flagId}`).css({'zIndex': '1000'});
    $(`#${flagId} .settings`).css({'background-color': 'lightgray'});

    return {
        labels: [
            {
                label: 'profile',
                click: () => {
                    window.location.href = `/${config.owner}`;
                }
            },
            {
                label: 'token',
                click: () => {
                    alert(config.token);
                },
                created: (e) => {
                    e.css({'background-color': 'lightyellow'});
                }
            }
        ],
        onShow: () => {
            //when the panel is show, custom styles
            $(`#${flagId}`).css({'width': '400px'});
        },
        onHide: () => {
            //when the panel is hide, compatible with hide class styles
            $(`#${flagId}`).css({'width': '200px'});
        }
    };

}


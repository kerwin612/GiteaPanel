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
                click: (e) => {
                    ctx.openLinkByATag({
                        href: `/${config.owner}`,
                        target: e.which === 3 ? '_blank' : '_self'
                    });
                    //window.location.href = `/${config.owner}`;
                }
            },
            {
                label: 'open_link',
                link: {
                    href: 'link_demo',
                    target: '_blank'
                }
            },
            {
                label: 'show_token',
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


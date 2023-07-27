function main(ctx) {

    //load jQuery, configuration, id of the root node
    let { $, config, flagId } = ctx;

    //custom styles
    $(`#${flagId}`).css({'zIndex': '1000'});
    $(`#${flagId} .settings`).css({'background-color': 'lightgray'});

    let openLinkByATag = (link) => {
        return (e) => {
            ctx.openLinkByATag({
                href: link,
                target: e.which === 3 ? '_blank' : '_self'
            });
        };
    };

    let orgs = $.ajax({
        url: `/api/v1/orgs`,
        headers: { 'accept': 'application/json', 'authorization': `token ${ctx.config.token}` },
        async: false
    });

    return {
        labels: [
            {
                label: 'profile',
                click: openLinkByATag(`/${config.owner}`)
                //click: () => {
                //    window.location.href = `/${config.owner}`;
                //}
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
            },
            {
                label: 'organizations',
                labels: ((orgs.responseJSON||[]).map(i => ({label: i.name, click: openLinkByATag(`/${i.full_name}`)}))),
                created: (e) => {
                    e.children().css({'background-color': 'lightcyan'});
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


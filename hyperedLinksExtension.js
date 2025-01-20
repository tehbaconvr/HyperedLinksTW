(function (Scratch) {
    'use strict';

    class HyperedLinksExtension {
        getInfo() {
            return {
                id: 'hyperedlinks',
                name: 'Hypered Links (Made by tehbaconvr)',
                color1: '#002527', 
                color2: '#00373A', 
                color3: '#00494D', 
                blocks: [

                    {
                        opcode: 'openTab',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'open new tab with link [URL]',
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://example.com'
                            }
                        }
                    },
                    {
                        opcode: 'changeTab',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'change current tab to [URL]',
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://example.com'
                            }
                        }
                    },
                    {
                        opcode: 'isValidURL',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: '[URL] is a valid URL',
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://example.com'
                            }
                        }
                    },

                    {
                        opcode: 'openInSameTab',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'open [URL] in same tab',
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://example.com'
                            }
                        }
                    },
                    {
                        opcode: 'getReferrer',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'referrer URL'
                    },
                    {
                        opcode: 'reloadPage',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'reload page'
                    },
                    {
                        opcode: 'clearClipboard',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'clear clipboard'
                    },
                    {
                        opcode: 'countCharacters',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'character count of [URL]',
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://example.com'
                            }
                        }
                    },
                    {
                        opcode: 'getSearchParams',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'search parameters of [URL]',
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'https://example.com?q=example'
                            }
                        }
                    },
                    {
                        opcode: 'showCredit',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'made by tehbaconvr'
                    }
                ]
            };
        }

        openTab(args) {
            const url = args.URL;
            if (this._isValidURL(url)) {
                window.open(url, '_blank');
            } else {
                console.error('Invalid URL:', url);
            }
        }

        changeTab(args) {
            const url = args.URL;
            if (this._isValidURL(url)) {
                window.location.href = url;
            } else {
                console.error('Invalid URL:', url);
            }
        }

        isValidURL(args) {
            return this._isValidURL(args.URL);
        }

        openInSameTab(args) {
            const url = args.URL;
            if (this._isValidURL(url)) {
                window.location.assign(url);
            } else {
                console.error('Invalid URL:', url);
            }
        }

        getReferrer() {
            return document.referrer || 'No referrer';
        }

        reloadPage() {
            window.location.reload();
        }

        clearClipboard() {
            navigator.clipboard.writeText('').then(() => {
                console.log('Clipboard cleared.');
            }).catch(err => {
                console.error('Failed to clear clipboard:', err);
            });
        }

        countCharacters(args) {
            return args.URL.length;
        }

        getSearchParams(args) {
            try {
                const url = new URL(args.URL);
                return url.search || 'No search parameters';
            } catch (e) {
                return 'Invalid URL';
            }
        }

        showCredit() {
            return 'Made by tehbaconvr';
        }

        _isValidURL(url) {
            try {
                new URL(url);
                return true;
            } catch (e) {
                return false;
            }
        }
    }

    Scratch.extensions.register(new HyperedLinksExtension());
})(Scratch);

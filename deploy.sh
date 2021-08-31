#!/bin/bash
# outputディレクトリ内のファイルをrsync over SSHで転送
rsync -acvz --delete ./paths-are-tech-blog-template/ xs282265@sv10458.xserver.jp:/home/xs282265/paths-are.com/public_html/works.paths-are.com/paths-are-tech-blog-template/
# サービスを再起動
# ssh xs282265@sv10458.xserver.jp "run restart"

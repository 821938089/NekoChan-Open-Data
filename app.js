function init() {
	;(document.siteName = $('title').html()),
		$('body').addClass(
			`mdui-theme-primary-${UI.main_color} mdui-theme-accent-${UI.accent_color}`
		)
	let t = `\n<header class="mdui-appbar mdui-color-theme">\n  <div id="nav" class="mdui-toolbar mdui-container${
		UI.fluid_navigation_bar ? '-fluid' : ''
	} ${
		UI.dark_mode ? 'mdui-text-color-white-text' : ''
	}">\n  </div>\n</header>\n<div id="content" class="mdui-container">\n</div>\n\t`
	$('body').html(t)
}
document.write(
	'<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdui/1.0.1/css/mdui.min.css" integrity="sha512-x4mi26uahzsFv2+ZklhOELAiuLt2e+hSxQ/SWbW/FuZWZJSc4Ffb33Al7SmPqXXyZieN2rNxBiDsRqAtGKsxUA==" crossorigin="anonymous" />'
),
	document.write(
		'<script src="https://cdnjs.cloudflare.com/ajax/libs/markdown-it/12.0.4/markdown-it.min.js" integrity="sha512-0DkA2RqFvfXBVeti0R1l0E8oMkmY0X+bAA2i02Ld8xhpjpvqORUcE/UBe+0KOPzi5iNah0aBpW6uaNNrqCk73Q==" crossorigin="anonymous" async></script>'
	),
	document.write(
		'<link rel="stylesheet" href="//fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500&display=swap">'
	),
	document.write(
		"<style>* body{font-family: 'Noto Sans TC', sans-serif;} .mdui-select-selected{font-family: 'Noto Sans TC', sans-serif;} .mdui-select-menu{font-family: 'Noto Sans TC', sans-serif;}</style>"
	),
	document.write(
		'<style>* .mdui-theme-primary-blue .mdui-color-theme{background-color:rgba(35,36,39,1)!important}</style>'
	),
	document.write(
		'<style>* .mdui-appbar{padding-right: 8px; padding-left: 8px; margin-right: auto; margin-left: auto; max-width: 980px;}</style>'
	),
	document.write(
		'<style>* {box-sizing: border-box} body{margin:0px; padding:0px; background: url("//cdn.jsdelivr.net/gh/NekoChanTaiwan/NekoChan-Open-Data/images/background_2.webp"); background-attachment: fixed; background-repeat: no-repeat; background-position: center center; background-size: cover;}</style>'
	),
	document.write(
		'<style>* .mdui-container,.mdui-textfield-input{color:rgba(255,255,255,.87);background-color:rgba(35,36,39,0.95);border-width:1px;border-color:#333333;border-bottom-style:solid;}</style>'
	),
	document.write(
		'<style>* .mdui-list li{border-width:1px;border-color:#333333;border-bottom-style:solid;} </style>'
	),
	document.write(
		'<style>.mdui-appbar .mdui-toolbar{height:56px;font-size:1pc}.mdui-toolbar>*{padding:0 6px;margin:0 2px}.mdui-toolbar>i{opacity:.5}.mdui-toolbar>.mdui-typo-headline{padding:0 1pc 0 0}.mdui-toolbar>i{padding:0}.mdui-toolbar>a:hover,a.active,a.mdui-typo-headline{opacity:1}.mdui-container{max-width:980px}.mdui-list-item{transition:none}.mdui-list>.th{background-color:initial}.mdui-list-item>a{width:100%;line-height:3pc}.mdui-list-item{margin:2px 0;padding:0}.mdui-toolbar>a:last-child{opacity:1}@media screen and (max-width:980px){.mdui-list-item .mdui-text-right{display:none}.mdui-container{width:100%!important;margin:0}.mdui-toolbar>.mdui-typo-headline,.mdui-toolbar>a:last-child,.mdui-toolbar>i:first-child{display:block}}</style>'
	),
	document.write(
		'<script src="//cdnjs.cloudflare.com/ajax/libs/dplayer/1.25.1/DPlayer.min.js" integrity="sha512-bjMqZ0Ai1izYtoe+f9ehqyT9qaFYOcWgGUOj2mTx9aUBA+lEtKyIruqNhbR2toBtFg2n9LeN0FocK57P8X/jMg==" crossorigin="anonymous" async></script>'
	)
const Os = {
	isWindows: navigator.platform.toUpperCase().includes('WIN'),
	isMac: navigator.platform.toUpperCase().includes('MAC'),
	isMacLike: /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),
	isIos: /(iPhone|iPod|iPad)/i.test(navigator.platform),
	isMobile: /Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(
		navigator.userAgent
	),
}
function getDocumentHeight() {
	let t = document
	return Math.max(
		t.body.scrollHeight,
		t.documentElement.scrollHeight,
		t.body.offsetHeight,
		t.documentElement.offsetHeight,
		t.body.clientHeight,
		t.documentElement.clientHeight
	)
}
function render(t) {
	t.indexOf('?') > 0 && (t = t.substr(0, t.indexOf('?'))), title(t), nav(t)
	window.MODEL.is_search_page
		? ((window.scroll_status = { event_bound: !1, loading_lock: !1 }),
		  render_search_result_list())
		: t.match(/\/\d+:$/g) || '/' == t.substr(-1)
		? ((window.scroll_status = { event_bound: !1, loading_lock: !1 }), list(t))
		: file(t)
}
function title(t) {
	t = decodeURI(t)
	let i = window.current_drive_order || 0,
		e = window.drive_names[i]
	;(t = t.replace(`/${i}:`, '')), $('title').html(`${document.siteName} - ${t}`)
	let n = window.MODEL
	n.is_search_page
		? $('title').html(`${document.siteName} - ${e} - 搜索 ${n.q} 的結果`)
		: $('title').html(`${document.siteName} - ${e} - ${t}`),
		$('title').html(`${document.siteName}`)
}
function nav(t) {
	let e = window.MODEL,
		n = '',
		d = window.current_drive_order || 0
	n += `<a href="//nekochan.ml/0:/" class="mdui-typo-headline folder">${document.siteName}</a>`
	let a = window.drive_names
	if (
		((n +=
			'<select class="mdui-select" onchange="window.location.href=this.value" mdui-select style="overflow:visible;padding-left:8px;padding-right:8px">'),
		a.forEach((t, i) => {
			n += `<option value="/${i}:/"  ${
				i === d ? 'selected="selected"' : ''
			} >${t}</option>`
		}),
		(n += '</select>'),
		!e.is_search_page)
	) {
		let e = t.trim('/').split('/'),
			a = '/'
		if (e.length > 1)
			for (i in (e.shift(), e)) {
				let t = e[i]
				if (((a += `${(t = decodeURI(t))}/`), '' == t)) break
				n += `<i class="mdui-icon material-icons mdui-icon-dark folder" style="margin:0;">chevron_right</i><a class="folder" href="/${d}:${a}">${t}</a>`
			}
	}
	let l = (e.is_search_page && e.q) || ''
	const s = Os.isMobile
	let o = `<div class="mdui-toolbar-spacer"></div>\n        <div id="search_bar" class="mdui-textfield mdui-textfield-expandable mdui-float-right ${
		e.is_search_page ? 'mdui-textfield-expanded' : ''
	}" style="max-width:${
		s ? 300 : 400
	}px">\n            <button class="mdui-textfield-icon mdui-btn mdui-btn-icon" onclick="if($('#search_bar').hasClass('mdui-textfield-expanded') && $('#search_bar_form>input').val()) $('#search_bar_form').submit();">\n                <i class="mdui-icon material-icons">search</i>\n            </button>\n            <form id="search_bar_form" method="get" action="/${d}:search">\n            <input class="mdui-textfield-input" type="text" name="q" placeholder="輸入你想搜尋的內容" value="${l}"/>\n            </form>\n            <button class="mdui-textfield-close mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">close</i></button>\n        </div>`
	e.root_type < 2 && (n += o),
		$('#nav').html(n),
		mdui.mutation(),
		mdui.updateTextFields()
}
function requestListPath(t, i, e, n) {
	let d = {
		password: i.password || null,
		page_token: i.page_token || null,
		page_index: i.page_index || 0,
	}
	$.post(t, d, (i, a) => {
		let l = jQuery.parseJSON(i)
		l && l.error && '401' == l.error.code
			? n && n(t)
			: l && l.data && e && e(l, t, d)
	})
}
function requestSearch(t, i) {
	let e = {
		q: t.q || null,
		page_token: t.page_token || null,
		page_index: t.page_index || 0,
	}
	$.post(`/${window.current_drive_order}:search`, e, (t, n) => {
		let d = jQuery.parseJSON(t)
		d && d.data && i && i(d, e)
	})
}
function list(t) {
	$('#content').html(
		'\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\t <div class="mdui-row"> \n\t  <ul class="mdui-list"> \n\t   <li class="mdui-list-item th"> \n\t    <div class="mdui-col-xs-12 mdui-col-sm-7">\n      檔案名稱\n\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-3 mdui-text-right">\n      修改時間\n\t<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-2 mdui-text-right">\n      檔案大小\n\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t    </div> \n\t    </li> \n\t  </ul> \n\t </div> \n\t <div class="mdui-row"> \n\t  <ul id="list" class="mdui-list"> \n\t  </ul> \n    <div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">共 <span class="number"></span> 項<br>NekoChan Open Data</div>\n\t </div>\n\t <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>\n\t'
	)
	let i = localStorage.getItem(`password${t}`)
	$('#list').html(
		'<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>'
	),
		$('#readme_md').hide().html(''),
		$('#head_md').hide().html(''),
		requestListPath(
			t,
			{ password: i },
			function t(i, e, n) {
				$('#list')
					.data('nextPageToken', i.nextPageToken)
					.data('curPageIndex', i.curPageIndex),
					$('#spinner').remove(),
					null === i.nextPageToken
						? ($(window).off('scroll'),
						  (window.scroll_status.event_bound = !1),
						  (window.scroll_status.loading_lock = !1),
						  append_files_to_list(e, i.data.files))
						: (append_files_to_list(e, i.data.files),
						  !0 !== window.scroll_status.event_bound &&
								($(window).on('scroll', function () {
									let i = $(this).scrollTop(),
										d = getDocumentHeight()
									if (i + $(this).height() > d - (Os.isMobile ? 130 : 80)) {
										if (!0 === window.scroll_status.loading_lock) return
										;(window.scroll_status.loading_lock = !0),
											$(
												'<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>'
											).insertBefore('#readme_md'),
											mdui.updateSpinners()
										let i = $('#list')
										requestListPath(
											e,
											{
												password: n.password,
												page_token: i.data('nextPageToken'),
												page_index: i.data('curPageIndex') + 1,
											},
											t,
											null
										)
									}
								}),
								(window.scroll_status.event_bound = !0))),
					!0 === window.scroll_status.loading_lock &&
						(window.scroll_status.loading_lock = !1)
			},
			(t) => {
				$('#spinner').remove()
				let i = prompt('目錄加密, 請輸入密碼', '')
				localStorage.setItem(`password${t}`, i),
					null != i && '' != i ? list(t) : history.go(-1)
			}
		)
}
function append_files_to_list(t, e) {
	let n = $('#list'),
		d = null === n.data('nextPageToken'),
		a = '0' == n.data('curPageIndex')
	html = ''
	let l = []
	for (i in e) {
		let n = e[i],
			a = `${t + n.name}/`
		if (
			(null == n.size && (n.size = ''),
			(n.modifiedTime = utc2beijing(n.modifiedTime)),
			(n.size = formatFileSize(n.size)),
			'application/vnd.google-apps.folder' == n.mimeType)
		)
			n.name.test(/P]/)
				? (html += `<li class="mdui-list-item mdui-ripple"><a href="${a}" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${n.name}">\n\t            <img src="${a}/cover.webp" alt="封面讀取中">\n\t              ${n.name}\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right">${n.modifiedTime}</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right">${n.size}</div>\n\t            </a>\n\t\t\t</li>`)
				: (html += `<li class="mdui-list-item mdui-ripple"><a href="${a}" class="folder">\n\t\t\t\t\t<div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${n.name}">\n\t\t\t\t\t<i class="mdui-icon material-icons">folder_open</i>\n\t\t\t\t\t${n.name}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="mdui-col-sm-3 mdui-text-right">${n.modifiedTime}</div>\n\t\t\t\t\t<div class="mdui-col-sm-2 mdui-text-right">${n.size}</div>\n\t\t\t\t\t</a>\n\t\t\t\t</li>`)
		else {
			let e = t + n.name
			const a = t + n.name
			let s = 'file'
			d &&
				'!readme.md' == n.name &&
				get_file(e, n, (t) => {
					markdown('#readme_md', t)
				}),
				'!head.md' == n.name &&
					get_file(e, n, (t) => {
						markdown('#head_md', t)
					})
			let o = e.split('.').pop().toLowerCase()
			'|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|'.includes(
				`|${o}|`
			) && (l.push(a), (e += '?a=view'), (s += ' view')),
				n.name.test(/!head.md]/)
					? (html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${n.mimeType}" href="${e}" class="${s}">\n\t\t\t\t\t<div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${n.name}">\n\t\t\t\t\t<i class="mdui-icon material-icons">insert_drive_file</i>\n\t\t\t\t\t\t${n.name}\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="mdui-col-sm-3 mdui-text-right">${n.modifiedTime}</div>\n\t\t\t\t\t\t<div class="mdui-col-sm-2 mdui-text-right">${n.size}</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t</li>`)
					: (html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${
							n.mimeType
					  }" href="${e}" class="${s}">\n\t\t\t\t\t<div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${
							n.name
					  }">\n\t\t\t\t\t\t${
							Number(i) + 1
					  }.\n\t\t\t\t\t<i class="mdui-icon material-icons">insert_drive_file</i>\n\t\t\t\t\t\t${
							n.name
					  }\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="mdui-col-sm-3 mdui-text-right">${
							n.modifiedTime
					  }</div>\n\t\t\t\t\t\t<div class="mdui-col-sm-2 mdui-text-right">${
							n.size
					  }</div>\n\t\t\t\t\t\t</a>\n\t\t\t\t</li>`)
		}
	}
	if (l.length > 0) {
		let i = localStorage.getItem(t),
			e = l
		if (!a && i) {
			let t
			try {
				;(t = JSON.parse(i)), Array.isArray(t) || (t = [])
			} catch (i) {
				t = []
			}
			e = t.concat(l)
		}
		localStorage.setItem(t, JSON.stringify(e))
	}
	n.html(('0' == n.data('curPageIndex') ? '' : n.html()) + html),
		d &&
			$('#count')
				.removeClass('mdui-hidden')
				.find('.number')
				.text(n.find('li.mdui-list-item').length)
}
function render_search_result_list() {
	$('#content').html(
		'\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\t <div class="mdui-row"> \n\t  <ul class="mdui-list"> \n\t   <li class="mdui-list-item th"> \n\t    <div class="mdui-col-xs-12 mdui-col-sm-7">\n\t     文件\n\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-3 mdui-text-right">\n\t     修改時間\n\t<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-2 mdui-text-right">\n\t     大小\n\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t    </div> \n\t    </li> \n\t  </ul> \n\t </div> \n\t <div class="mdui-row"> \n\t  <ul id="list" class="mdui-list"> \n\t  </ul> \n\t  <div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">共 <span class="number"></span> 項</div>\n\t </div>\n\t <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>\n\t'
	),
		$('#list').html(
			'<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>'
		),
		$('#readme_md').hide().html(''),
		$('#head_md').hide().html(''),
		requestSearch({ q: window.MODEL.q }, function t(i, e) {
			$('#list')
				.data('nextPageToken', i.nextPageToken)
				.data('curPageIndex', i.curPageIndex),
				$('#spinner').remove(),
				null === i.nextPageToken
					? ($(window).off('scroll'),
					  (window.scroll_status.event_bound = !1),
					  (window.scroll_status.loading_lock = !1),
					  append_search_result_to_list(i.data.files))
					: (append_search_result_to_list(i.data.files),
					  !0 !== window.scroll_status.event_bound &&
							($(window).on('scroll', function () {
								let i = $(this).scrollTop(),
									e = getDocumentHeight()
								if (i + $(this).height() > e - (Os.isMobile ? 130 : 80)) {
									if (!0 === window.scroll_status.loading_lock) return
									;(window.scroll_status.loading_lock = !0),
										$(
											'<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>'
										).insertBefore('#readme_md'),
										mdui.updateSpinners()
									let i = $('#list')
									requestSearch(
										{
											q: window.MODEL.q,
											page_token: i.data('nextPageToken'),
											page_index: i.data('curPageIndex') + 1,
										},
										t
									)
								}
							}),
							(window.scroll_status.event_bound = !0))),
				!0 === window.scroll_status.loading_lock &&
					(window.scroll_status.loading_lock = !1)
		})
}
function append_search_result_to_list(t) {
	let e = $('#list'),
		n = null === e.data('nextPageToken')
	for (i in ((html = ''), t)) {
		let e = t[i]
		if (
			(null == e.size && (e.size = ''),
			(e.modifiedTime = utc2beijing(e.modifiedTime)),
			(e.size = formatFileSize(e.size)),
			'application/vnd.google-apps.folder' == e.mimeType)
		)
			html += `<li class="mdui-list-item mdui-ripple"><a id="${e.id}" onclick="onSearchResultItemClick(this)" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${e.name}">\n\t            <i class="mdui-icon material-icons">folder_open</i>\n\t              ${e.name}\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right">${e.modifiedTime}</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right">${e.size}</div>\n\t            </a>\n\t        </li>`
		else {
			let t = 'file',
				i = e.name.split('.').pop().toLowerCase()
			'|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|'.includes(
				`|${i}|`
			) && (t += ' view'),
				(html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a id="${e.id}" gd-type="${e.mimeType}" onclick="onSearchResultItemClick(this)" class="${t}">\n\t          <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${e.name}">\n\t          <i class="mdui-icon material-icons">insert_drive_file</i>\n\t            ${e.name}\n\t          </div>\n\t          <div class="mdui-col-sm-3 mdui-text-right">${e.modifiedTime}</div>\n\t          <div class="mdui-col-sm-2 mdui-text-right">${e.size}</div>\n\t          </a>\n\t      </li>`)
		}
	}
	e.html(('0' == e.data('curPageIndex') ? '' : e.html()) + html),
		n &&
			$('#count')
				.removeClass('mdui-hidden')
				.find('.number')
				.text(e.find('li.mdui-list-item').length)
}
function onSearchResultItemClick(t) {
	let i = $(t).hasClass('view'),
		e = window.current_drive_order,
		n = mdui.dialog({
			title: '',
			content:
				'<div class="mdui-text-center mdui-typo-title mdui-m-b-1">正在獲取路徑...</div><div class="mdui-spinner mdui-spinner-colorful mdui-center"></div>',
			history: !1,
			modal: !0,
			closeOnEsc: !0,
		})
	mdui.updateSpinners(),
		$.post(`/${e}:id2path`, { id: t.id }, (t) => {
			if (t) {
				n.close()
				let d = `/${e}:${t}${i ? '?a=view' : ''}`
				n = mdui.dialog({
					title: '已成功獲取路徑',
					content: `<a href="${d}">${t}</a>`,
					history: !1,
					modal: !0,
					closeOnEsc: !0,
					buttons: [
						{
							text: '開啟',
							onClick() {
								window.location.href = d
							},
						},
						{
							text: '新分頁中開啟',
							onClick() {
								window.open(d)
							},
						},
						{ text: '取消' },
					],
				})
			} else
				n.close(),
					(n = mdui.dialog({
						title: '獲取目標路徑失敗',
						content:
							'該資源可能已經移除，或已移動，請通知 NekoChan#2851 解決。',
						history: !1,
						modal: !0,
						closeOnEsc: !0,
						buttons: [{ text: '確認' }],
					}))
		})
}
function get_file(t, i, e) {
	let n = `file_path_${t}${i.modifiedTime}`,
		d = localStorage.getItem(n)
	if (null != d) return e(d)
	$.get(t, (t) => {
		localStorage.setItem(n, t), e(t)
	})
}
function file(t) {
	let i = t
		.split('/')
		.pop()
		.split('.')
		.pop()
		.toLowerCase()
		.replace('?a=view', '')
	return '|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|'.includes(
		`|${i}|`
	)
		? file_video(t)
		: '|bmp|jpg|jpeg|png|gif|'.includes(`|${i}|`)
		? file_image(t)
		: void 0
}
function file_video(t) {
	let i = decodeURI(window.location.origin + t),
		e = i
	const n = decodeURI(t.slice(t.lastIndexOf('/') + 1, t.length)),
		d = window.location.pathname,
		a = d.lastIndexOf('/'),
		l = d.slice(0, a + 1)
	let s = localStorage.getItem(l),
		o = ''
	if (s) {
		try {
			;(s = JSON.parse(s)), Array.isArray(s) || (s = [])
		} catch (t) {
			console.error(t), (s = [])
		}
		if (s.length > 0 && s.includes(t)) {
			let i = s.length,
				e = s.indexOf(t),
				n = e - 1 > -1 ? s[e - 1] : null,
				d = e + 1 < i ? s[e + 1] : null
			o = `\n            <div class="mdui-container">\n                <div class="mdui-row-xs-2 mdui-m-b-1">\n                    <div class="mdui-col">\n                        ${
				n
					? `<button id="leftBtn" data-filepath="${n}" class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">上一集</button>`
					: '<button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" disabled>上一集</button>'
			}\n                    </div>\n                    <div class="mdui-col">\n                        ${
				d
					? `<button id="rightBtn"  data-filepath="${d}" class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple">下一集</button>`
					: '<button class="mdui-btn mdui-btn-block mdui-color-theme-accent mdui-ripple" disabled>下一集</button>'
			}\n                    </div>\n                </div>\n            </div>\n            `
		}
	}
	let r = `<a href="potplayer://${e}" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent windows-btn">PotPlayer 串流</a>`
	if (
		(/(Mac)/i.test(navigator.userAgent) &&
			(r = `<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mac-btn" data-href="iina://open?url=${e}">IINA 串流</button>`),
		/(Android)/i.test(navigator.userAgent) &&
			((r = `<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent android-btn" data-href="intent:${e}#Intent;package=com.mxtech.videoplayer.pro;S.title=${t};end">MXPlayer Pro 串流</button>`),
			(r += `<br><button style="margin-top: 15px" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent android-btn" data-href="intent:${e}#Intent;package=com.mxtech.videoplayer.ad;S.title=${t};end">MXPlayer Free 串流</button>`)),
		/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent))
	) {
		r = `<a class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" href="infuse://${i.replace(
			/(^\w+:|^)\/\//,
			''
		)}">Infuse 串流</a>`
	}
	let m = `\n<div class="mdui-container-fluid">\n    <br>\n    <div class="mdui-textfield">\n    <label class="mdui-textfield-label mdui-text-color-white">目前檔案：</label>\n    <input class="mdui-textfield-input mdui-text-color-white" type="text" value="${n}" readonly/>\n    </div>\n    <div class="mdui-center" id="player"></div>\n    <br>\n    <div id="imgWrap">\n    ${o}\n    </div>\n    <br>\n    ${(r += `<br><a style="margin-top: 15px" href="${e}" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent download-btn">直連下載檔案</a>`)}\n    <div class="mdui-textfield">\n      <label class="mdui-textfield-label mdui-text-color-white">注意：若影片沒有畫面，請嘗試播放器。或通知我本人。</label>\n    </div>\n    <hr>\n</div>\n    `
	$('#content').html(m),
		$(document).ready(() => {
			let t = 0,
				i = () => {
					let n = null
					window.DPlayer || window.location.reload(),
						(n = new DPlayer({
							container: document.getElementById('player'),
							theme: '#0080ff',
							autoplay: !0,
							lang: 'zh-tw',
							screenshot: !0,
							video: { url: e },
							contextmenu: [
								{ text: 'NekoChan Open Data', link: '//nekochan.ml/' },
							],
						})).seek(t),
						n.on('error', () => {
							0 != n.video.currentTime && (t = n.video.currentTime), i()
						}),
						n.on('seeked', () => {
							t = n.video.currentTime
						}),
						n.on('seeking', () => {
							t = n.video.currentTime
						})
				}
			i()
		}),
		$('#leftBtn, #rightBtn').click((t) => {
			let i = $(t.target)
			;['I', 'SPAN'].includes(t.target.nodeName) && (i = $(t.target).parent())
			const e = i.attr('data-filepath')
			i.attr('data-direction')
			file(e)
		})
}
function file_image(t) {
	let i = `\n<div class="mdui-container-fluid">\n    <br>\n    <img class="mdui-img-fluid" src="${decodeURI(
		window.location.origin + t
	)}"/>\n  <br>\n  <hr>\n</div>`
	$('#content').html(i)
}
function utc2beijing(t) {
	let i = t.indexOf('T'),
		e = t.indexOf('Z'),
		n = `${t.substr(0, i)} ${t.substr(i + 1, e - i - 1)}`
	;(timestamp = new Date(Date.parse(n))),
		(timestamp = timestamp.getTime()),
		(timestamp /= 1e3)
	var d = timestamp + 28800
	let a = 1900 + (d = new Date(1e3 * d)).getYear(),
		l = `0${d.getMonth() + 1}`,
		s = `0${d.getDate()}`,
		o = `0${d.getHours()}`,
		r = `0${d.getMinutes()}`,
		m = `0${d.getSeconds()}`
	return `${a}/${l.substring(l.length - 2, l.length)}/${s.substring(
		s.length - 2,
		s.length
	)} ${o.substring(o.length - 2, o.length)}:${r.substring(
		r.length - 2,
		r.length
	)}:${m.substring(m.length - 2, m.length)}`
}
function formatFileSize(t) {
	return (t =
		t >= 1073741824
			? `${(t / 1073741824).toFixed(2)} GB`
			: t >= 1048576
			? `${(t / 1048576).toFixed(2)} MB`
			: t >= 1024
			? `${(t / 1024).toFixed(2)} KB`
			: t > 1
			? `${t} Bytes`
			: 1 == t
			? `${t} Byte`
			: ' 資料夾')
}
function markdown(t, i) {
	if (null == window.md) (window.md = window.markdownit()), markdown(t, i)
	else {
		let e = md.render(i)
		$(t).show().html(e)
	}
}
;(String.prototype.trim = function (t) {
	return t
		? this.replace(new RegExp(`^\\${t}+|\\${t}+$`, 'g'), '')
		: this.replace(/^\s+|\s+$/g, '')
}),
	(window.onpopstate = () => {
		render(window.location.pathname)
	}),
	$(() => {
		init(), render(window.location.pathname)
	})

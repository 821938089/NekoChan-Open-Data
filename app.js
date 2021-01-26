function init() {
	;(document.siteName = $('title').html()),
		$('body').addClass(
			`mdui-theme-primary-${UI.main_color} mdui-theme-accent-${UI.accent_color}`
		)
	let i = `\n<header class="mdui-appbar mdui-color-theme">\n  <div id="nav" class="mdui-toolbar mdui-container${
		UI.fluid_navigation_bar ? '-fluid' : ''
	} ${
		UI.dark_mode ? 'mdui-text-color-white-text' : ''
	}">\n  </div>\n</header>\n<div id="content" class="mdui-container">\n</div>\n\t`
	$('body').html(i)
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
	let i = document
	return Math.max(
		i.body.scrollHeight,
		i.documentElement.scrollHeight,
		i.body.offsetHeight,
		i.documentElement.offsetHeight,
		i.body.clientHeight,
		i.documentElement.clientHeight
	)
}
function render(i) {
	i.indexOf('?') > 0 && (i = i.substr(0, i.indexOf('?'))), title(i), nav(i)
	window.MODEL.is_search_page
		? ((window.scroll_status = { event_bound: !1, loading_lock: !1 }),
		  render_search_result_list())
		: i.match(/\/\d+:$/g) || '/' == i.substr(-1)
		? ((window.scroll_status = { event_bound: !1, loading_lock: !1 }), list(i))
		: file(i)
}
function title(i) {
	i = decodeURI(i)
	let e = window.current_drive_order || 0,
		t = window.drive_names[e]
	;(i = i.replace(`/${e}:`, '')), $('title').html(document.siteName + ' - ' + i)
	let n = window.MODEL
	n.is_search_page
		? $('title').html(`${document.siteName} - ${t} - 搜索 ${n.q} 的結果`)
		: $('title').html(`${document.siteName} - ${t} - ${i}`),
		$('title').html(`${document.siteName}`)
}
function nav(e) {
	let t = window.MODEL,
		n = '',
		d = window.current_drive_order || 0
	n += `<a href="//nekochan.ml/0:/?${Date.now()}" class="mdui-typo-headline folder">${
		document.siteName
	}</a>`
	let a = window.drive_names
	if (
		((n +=
			'<select class="mdui-select" onchange="window.location.href=this.value" mdui-select style="overflow:visible;padding-left:8px;padding-right:8px">'),
		a.forEach((i, e) => {
			n += `<option value="/${e}:/"  ${
				e === d ? 'selected="selected"' : ''
			} >${i}</option>`
		}),
		(n += '</select>'),
		!t.is_search_page)
	) {
		let t = e.trim('/').split('/'),
			a = '/'
		if (t.length > 1)
			for (i in (t.shift(), t)) {
				let e = t[i]
				if (((a += `${(e = decodeURI(e))}/`), '' == e)) break
				n += `<i class="mdui-icon material-icons mdui-icon-dark folder" style="margin:0;">chevron_right</i><a class="folder" href="/${d}:${a}">${e}</a>`
			}
	}
	let o = (t.is_search_page && t.q) || ''
	const l = Os.isMobile
	let s = `<div class="mdui-toolbar-spacer"></div>\n        <div id="search_bar" class="mdui-textfield mdui-textfield-expandable mdui-float-right ${
		t.is_search_page ? 'mdui-textfield-expanded' : ''
	}" style="max-width:${
		l ? 300 : 400
	}px">\n            <button class="mdui-textfield-icon mdui-btn mdui-btn-icon" onclick="if($('#search_bar').hasClass('mdui-textfield-expanded') && $('#search_bar_form>input').val()) $('#search_bar_form').submit();">\n                <i class="mdui-icon material-icons">search</i>\n            </button>\n            <form id="search_bar_form" method="get" action="/${d}:search">\n            <input class="mdui-textfield-input" type="text" name="q" placeholder="Search in current drive" value="${o}"/>\n            </form>\n            <button class="mdui-textfield-close mdui-btn mdui-btn-icon"><i class="mdui-icon material-icons">close</i></button>\n        </div>`
	t.root_type < 2 && (n += s),
		$('#nav').html(n),
		mdui.mutation(),
		mdui.updateTextFields()
}
function requestListPath(i, e, t, n) {
	let d = {
		password: e.password || null,
		page_token: e.page_token || null,
		page_index: e.page_index || 0,
	}
	$.post(i, d, (e, a) => {
		let o = jQuery.parseJSON(e)
		o && o.error && '401' == o.error.code
			? n && n(i)
			: o && o.data && t && t(o, i, d)
	})
}
function requestSearch(i, e) {
	let t = {
		q: i.q || null,
		page_token: i.page_token || null,
		page_index: i.page_index || 0,
	}
	$.post(`/${window.current_drive_order}:search`, t, (i, n) => {
		let d = jQuery.parseJSON(i)
		d && d.data && e && e(d, t)
	})
}
function list(i) {
	$('#content').html(
		'\n\t<div id="head_md" class="mdui-typo" style="display:none;padding: 20px 0;"></div>\n\t <div class="mdui-row"> \n\t  <ul class="mdui-list"> \n\t   <li class="mdui-list-item th"> \n\t    <div class="mdui-col-xs-12 mdui-col-sm-7">\n      檔案名稱\n\t<i class="mdui-icon material-icons icon-sort" data-sort="name" data-order="more">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-3 mdui-text-right">\n      修改時間\n\t<i class="mdui-icon material-icons icon-sort" data-sort="date" data-order="downward">expand_more</i>\n\t    </div> \n\t    <div class="mdui-col-sm-2 mdui-text-right">\n      檔案大小\n\t<i class="mdui-icon material-icons icon-sort" data-sort="size" data-order="downward">expand_more</i>\n\t    </div> \n\t    </li> \n\t  </ul> \n\t </div> \n\t <div class="mdui-row"> \n\t  <ul id="list" class="mdui-list"> \n\t  </ul> \n    <div id="count" class="mdui-hidden mdui-center mdui-text-center mdui-m-b-3 mdui-typo-subheading mdui-text-color-blue-grey-500">共 <span class="number"></span> 項<br>NekoChan Open Data</div>\n\t </div>\n\t <div id="readme_md" class="mdui-typo" style="display:none; padding: 20px 0;"></div>\n\t'
	)
	let e = localStorage.getItem(`password${i}`)
	$('#list').html(
		'<div class="mdui-progress"><div class="mdui-progress-indeterminate"></div></div>'
	),
		$('#readme_md').hide().html(''),
		$('#head_md').hide().html(''),
		requestListPath(
			i,
			{ password: e },
			function i(e, t, n) {
				$('#list')
					.data('nextPageToken', e.nextPageToken)
					.data('curPageIndex', e.curPageIndex),
					$('#spinner').remove(),
					null === e.nextPageToken
						? ($(window).off('scroll'),
						  (window.scroll_status.event_bound = !1),
						  (window.scroll_status.loading_lock = !1),
						  append_files_to_list(t, e.data.files))
						: (append_files_to_list(t, e.data.files),
						  !0 !== window.scroll_status.event_bound &&
								($(window).on('scroll', function () {
									let e = $(this).scrollTop(),
										d = getDocumentHeight()
									if (e + $(this).height() > d - (Os.isMobile ? 130 : 80)) {
										if (!0 === window.scroll_status.loading_lock) return
										;(window.scroll_status.loading_lock = !0),
											$(
												'<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>'
											).insertBefore('#readme_md'),
											mdui.updateSpinners()
										let e = $('#list')
										requestListPath(
											t,
											{
												password: n.password,
												page_token: e.data('nextPageToken'),
												page_index: e.data('curPageIndex') + 1,
											},
											i,
											null
										)
									}
								}),
								(window.scroll_status.event_bound = !0))),
					!0 === window.scroll_status.loading_lock &&
						(window.scroll_status.loading_lock = !1)
			},
			(i) => {
				$('#spinner').remove()
				let e = prompt('目錄加密, 請輸入密碼', '')
				localStorage.setItem(`password${i}`, e),
					null != e && '' != e ? list(i) : history.go(-1)
			}
		)
}
function append_files_to_list(e, t) {
	let n = $('#list'),
		d = null === n.data('nextPageToken'),
		a = '0' == n.data('curPageIndex')
	html = ''
	let o = []
	for (i in t) {
		let n = t[i],
			a = `${e + n.name}/`
		if (
			(null == n.size && (n.size = ''),
			(n.modifiedTime = utc2beijing(n.modifiedTime)),
			(n.size = formatFileSize(n.size)),
			'application/vnd.google-apps.folder' == n.mimeType)
		)
			html += `<li class="mdui-list-item mdui-ripple"><a href="${a}?${Date.now()}" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${
				n.name
			}">\n\t            <i class="mdui-icon material-icons">folder_open</i>\n\t              ${
				n.name
			}\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right">${
				n.modifiedTime
			}</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right">${
				n.size
			}</div>\n\t            </a>\n\t        </li>`
		else {
			let t = e + n.name
			const a = e + n.name
			let l = 'file'
			d &&
				'!readme.md' == n.name &&
				get_file(t, n, (i) => {
					markdown('#readme_md', i)
				}),
				'!head.md' == n.name &&
					get_file(t, n, (i) => {
						markdown('#head_md', i)
					})
			let s = t.split('.').pop().toLowerCase()
			'|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|pdf|'.includes(
				`|${s}|`
			) && (o.push(a), (t += `?a=view${Date.now()}`), (l += ' view')),
				(html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a gd-type="${
					n.mimeType
				}" href="${t}" class="${l}">\n\t\t\t  <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${
					n.name
				}">\n\t\t\t  \t${
					Number(i) + 1
				}.\n\t          <i class="mdui-icon material-icons">insert_drive_file</i>\n\t            ${
					n.name
				}\n\t          </div>\n\t          <div class="mdui-col-sm-3 mdui-text-right">${
					n.modifiedTime
				}</div>\n\t          <div class="mdui-col-sm-2 mdui-text-right">${
					n.size
				}</div>\n\t          </a>\n\t      </li>`)
		}
	}
	if (o.length > 0) {
		let i = localStorage.getItem(e),
			t = o
		if (!a && i) {
			let e
			try {
				;(e = JSON.parse(i)), Array.isArray(e) || (e = [])
			} catch (i) {
				e = []
			}
			t = e.concat(o)
		}
		localStorage.setItem(e, JSON.stringify(t))
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
		requestSearch({ q: window.MODEL.q }, function i(e, t) {
			$('#list')
				.data('nextPageToken', e.nextPageToken)
				.data('curPageIndex', e.curPageIndex),
				$('#spinner').remove(),
				null === e.nextPageToken
					? ($(window).off('scroll'),
					  (window.scroll_status.event_bound = !1),
					  (window.scroll_status.loading_lock = !1),
					  append_search_result_to_list(e.data.files))
					: (append_search_result_to_list(e.data.files),
					  !0 !== window.scroll_status.event_bound &&
							($(window).on('scroll', function () {
								var e = $(this).scrollTop(),
									t = getDocumentHeight()
								if (e + $(this).height() > t - (Os.isMobile ? 130 : 80)) {
									if (!0 === window.scroll_status.loading_lock) return
									;(window.scroll_status.loading_lock = !0),
										$(
											'<div id="spinner" class="mdui-spinner mdui-spinner-colorful mdui-center"></div>'
										).insertBefore('#readme_md'),
										mdui.updateSpinners()
									let e = $('#list')
									requestSearch(
										{
											q: window.MODEL.q,
											page_token: e.data('nextPageToken'),
											page_index: e.data('curPageIndex') + 1,
										},
										i
									)
								}
							}),
							(window.scroll_status.event_bound = !0))),
				!0 === window.scroll_status.loading_lock &&
					(window.scroll_status.loading_lock = !1)
		})
}
function append_search_result_to_list(e) {
	var t = $('#list'),
		n = null === t.data('nextPageToken')
	for (i in ((html = ''), e)) {
		var d = e[i]
		if (
			(null == d.size && (d.size = ''),
			(d.modifiedTime = utc2beijing(d.modifiedTime)),
			(d.size = formatFileSize(d.size)),
			'application/vnd.google-apps.folder' == d.mimeType)
		)
			html += `<li class="mdui-list-item mdui-ripple"><a id="${d.id}" onclick="onSearchResultItemClick(this)" class="folder">\n\t            <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${d.name}">\n\t            <i class="mdui-icon material-icons">folder_open</i>\n\t              ${d.name}\n\t            </div>\n\t            <div class="mdui-col-sm-3 mdui-text-right">${d.modifiedTime}</div>\n\t            <div class="mdui-col-sm-2 mdui-text-right">${d.size}</div>\n\t            </a>\n\t        </li>`
		else {
			var a = 'file',
				o = d.name.split('.').pop().toLowerCase()
			'|html|php|css|go|java|js|json|txt|sh|md|mp4|webm|avi|bmp|jpg|jpeg|png|gif|m4a|mp3|flac|wav|ogg|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|'.indexOf(
				`|${o}|`
			) >= 0 && (a += ' view'),
				(html += `<li class="mdui-list-item file mdui-ripple" target="_blank"><a id="${d.id}" gd-type="${d.mimeType}" onclick="onSearchResultItemClick(this)" class="${a}">\n\t          <div class="mdui-col-xs-12 mdui-col-sm-7 mdui-text-truncate" title="${d.name}">\n\t          <i class="mdui-icon material-icons">insert_drive_file</i>\n\t            ${d.name}\n\t          </div>\n\t          <div class="mdui-col-sm-3 mdui-text-right">${d.modifiedTime}</div>\n\t          <div class="mdui-col-sm-2 mdui-text-right">${d.size}</div>\n\t          </a>\n\t      </li>`)
		}
	}
	t.html(('0' == t.data('curPageIndex') ? '' : t.html()) + html),
		n &&
			$('#count')
				.removeClass('mdui-hidden')
				.find('.number')
				.text(t.find('li.mdui-list-item').length)
}
function onSearchResultItemClick(i) {
	var e = $(i).hasClass('view'),
		t = window.current_drive_order,
		n = mdui.dialog({
			title: '',
			content:
				'<div class="mdui-text-center mdui-typo-title mdui-m-b-1">正在獲取目標路徑...</div><div class="mdui-spinner mdui-spinner-colorful mdui-center"></div>',
			history: !1,
			modal: !0,
			closeOnEsc: !0,
		})
	mdui.updateSpinners(),
		$.post(`/${t}:id2path`, { id: i.id }, function (i) {
			if (i) {
				n.close()
				var d = `/${t}:${i}${e ? '?a=view' : ''}`
				n = mdui.dialog({
					title: '<i class="mdui-icon material-icons">&#xe815;</i>目標路徑',
					content: `<a href="${d}">${i}</a>`,
					history: !1,
					modal: !0,
					closeOnEsc: !0,
					buttons: [
						{
							text: '打開',
							onClick: function () {
								window.location.href = d
							},
						},
						{
							text: '新標籤中打開',
							onClick: function () {
								window.open(d)
							},
						},
						{ text: '取消' },
					],
				})
			} else n.close(), (n = mdui.dialog({ title: '<i class="mdui-icon material-icons">&#xe811;</i>獲取目標路徑失敗', content: 'o(╯□╰)o 可能是因為該盤中並不存在此項！也可能因為沒有把【與我共享】的文件添加到個人云端硬碟中！', history: !1, modal: !0, closeOnEsc: !0, buttons: [{ text: 'WTF ???' }] }))
		})
}
function get_file(i, e, t) {
	let n = `file_path_${i}${e.modifiedTime}`,
		d = localStorage.getItem(n)
	if (null != d) return t(d)
	$.get(i, (i) => {
		localStorage.setItem(n, i), t(i)
	})
}
function file(i) {
	let e = i
		.split('/')
		.pop()
		.split('.')
		.pop()
		.toLowerCase()
		.replace('?a=view', '')
	return '|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|'.includes(
		`|${e}|`
	)
		? file_video(i)
		: '|bmp|jpg|jpeg|png|gif|'.includes(`|${e}|`)
		? file_image(i)
		: void 0
}
function file_video(i) {
	let e = decodeURI(window.location.origin + i),
		t = e
	const n = decodeURI(i.slice(i.lastIndexOf('/') + 1, i.length)),
		d = window.location.pathname,
		a = d.lastIndexOf('/'),
		o = d.slice(0, a + 1)
	let l = localStorage.getItem(o),
		s = ''
	if (l) {
		try {
			;(l = JSON.parse(l)), Array.isArray(l) || (l = [])
		} catch (i) {
			console.error(i), (l = [])
		}
		if (l.length > 0 && l.includes(i)) {
			let e = l.length,
				t = l.indexOf(i),
				n = t - 1 > -1 ? l[t - 1] : null,
				d = t + 1 < e ? l[t + 1] : null
			s = `\n            <div class="mdui-container">\n                <div class="mdui-row-xs-2 mdui-m-b-1">\n                    <div class="mdui-col">\n                        ${
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
	let r = `<a href="potplayer://${t}" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent windows-btn">PotPlayer 串流</a>`
	if (
		(/(Mac)/i.test(navigator.userAgent) &&
			(r = `<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent mac-btn" data-href="iina://open?url=${t}">IINA 串流</button>`),
		/(Android)/i.test(navigator.userAgent) &&
			((r = `<button class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent android-btn" data-href="intent:${t}#Intent;package=com.mxtech.videoplayer.pro;S.title=${i};end">MXPlayer Pro 串流</button>`),
			(r += `<br><button style="margin-top: 15px" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent android-btn" data-href="intent:${t}#Intent;package=com.mxtech.videoplayer.ad;S.title=${i};end">MXPlayer Free 串流</button>`)),
		/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent))
	) {
		r = `<a class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent" href="infuse://${e.replace(
			/(^\w+:|^)\/\//,
			''
		)}">Infuse 串流</a>`
	}
	let m = `\n<div class="mdui-container-fluid">\n    <br>\n    <div class="mdui-textfield">\n    <label class="mdui-textfield-label mdui-text-color-white">目前檔案：</label>\n    <input class="mdui-textfield-input mdui-text-color-white" type="text" value="${n}" readonly/>\n    </div>\n    <div class="mdui-center" id="player"></div>\n    <br>\n    <div id="imgWrap">\n    ${s}\n    </div>\n    <br>\n    ${(r += `<br><a style="margin-top: 15px" href="${t}" class="mdui-btn mdui-btn-raised mdui-ripple mdui-color-theme-accent download-btn">直連下載檔案</a>`)}\n    <div class="mdui-textfield">\n      <label class="mdui-textfield-label mdui-text-color-white">注意：若影片沒有畫面，請嘗試播放器。或通知我本人。</label>\n    </div>\n    <hr>\n</div>\n    `
	$('#content').html(m),
		$(document).ready(function () {
			let i = 0,
				e = () => {
					let n = null
					window.DPlayer || window.location.reload(),
						(n = new DPlayer({
							container: document.getElementById('player'),
							theme: '#0080ff',
							autoplay: !0,
							lang: 'zh-tw',
							screenshot: !0,
							video: { url: t },
							contextmenu: [
								{ text: 'NekoChan Open Data', link: '//nekochan.ml/' },
							],
						})).seek(i),
						n.on('error', () => {
							0 != n.video.currentTime && (i = n.video.currentTime), e()
						}),
						n.on('seeked', () => {
							i = n.video.currentTime
						}),
						n.on('seeking', () => {
							i = n.video.currentTime
						})
				}
			e()
		}),
		$('#leftBtn, #rightBtn').click((i) => {
			let e = $(i.target)
			;['I', 'SPAN'].includes(i.target.nodeName) && (e = $(i.target).parent())
			const t = e.attr('data-filepath')
			e.attr('data-direction')
			file(t)
		})
}
function file_image(i) {
	let e = `\n<div class="mdui-container-fluid">\n    <br>\n    <img class="mdui-img-fluid" src="${decodeURI(
		window.location.origin + i
	)}"/>\n  <br>\n  <hr>\n</div>`
	$('#content').html(e)
}
function utc2beijing(i) {
	let e = i.indexOf('T'),
		t = i.indexOf('Z'),
		n = `${i.substr(0, e)} ${i.substr(e + 1, t - e - 1)}`
	;(timestamp = new Date(Date.parse(n))),
		(timestamp = timestamp.getTime()),
		(timestamp /= 1e3)
	var d = timestamp + 28800
	let a = 1900 + (d = new Date(1e3 * d)).getYear(),
		o = `0${d.getMonth() + 1}`,
		l = `0${d.getDate()}`,
		s = `0${d.getHours()}`,
		r = `0${d.getMinutes()}`,
		m = `0${d.getSeconds()}`
	return `${a}/${o.substring(o.length - 2, o.length)}/${l.substring(
		l.length - 2,
		l.length
	)} ${s.substring(s.length - 2, s.length)}:${r.substring(
		r.length - 2,
		r.length
	)}:${m.substring(m.length - 2, m.length)}`
}
function formatFileSize(i) {
	return (i =
		i >= 1073741824
			? `${(i / 1073741824).toFixed(2)} GB`
			: i >= 1048576
			? `${(i / 1048576).toFixed(2)} MB`
			: i >= 1024
			? `${(i / 1024).toFixed(2)} KB`
			: i > 1
			? `${i} Bytes`
			: 1 == i
			? `${i} Byte`
			: ' 資料夾')
}
function markdown(i, e) {
	if (null == window.md) (window.md = window.markdownit()), markdown(i, e)
	else {
		let t = md.render(e)
		$(i).show().html(t)
	}
}
;(String.prototype.trim = function (i) {
	return i
		? this.replace(new RegExp(`^\\${i}+|\\${i}+$`, 'g'), '')
		: this.replace(/^\s+|\s+$/g, '')
}),
	(window.onpopstate = () => {
		render(window.location.pathname)
	}),
	$(() => {
		init(), render(window.location.pathname)
	})

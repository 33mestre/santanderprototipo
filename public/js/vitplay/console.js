(function () {
  if (("console" in window) && console.log) {
    try {
      // objeto console
      window.console_ = [];
      // console level
      const levelProduction = ()=>{
        return Object.freeze(  {
        title: true,
        shelson: true,
        moduloAtivo: false,
        event: false,
        css: false,
        model: false,
        handle: false,
        service: false,
        setItemSession: false,
        getItemSession: false,
        getItemLocal: false,
        setItemLocal: false,
        prototypeDefinition: false,
        scrollbar: false,
        vitplayPrototypeDefinition: false,
        createScript: false,
        windowDefinition: false,
        pageContent: false,
        pagePromisses: false,
        audioLog: false,
        dadosIniciais: false,
        fine: false,
        videoLog: false,
        log: false,
        info: false,
        debug: false,
        warn: false,
        table: false,
        error: false,
        os: false,
        sound: false,
        windowEvent: false,
        eventLog: false,
        build: false,
        domWindow: false,
        bodyEventClass: false,
        calendar: false,
        constantsDefinition: false
      })};
      const levelDevelop = ()=>{
        return Object.freeze(  {
          title: true,
          shelson: true,
          moduloAtivo: true,
          event: false,
          css: true,
          model: true,
          handle: true,
          service: true,
          setItemSession: true,
          getItemSession: true,
          getItemLocal: true,
          setItemLocal: true,
          prototypeDefinition: false,
          scrollbar: true,
          vitplayPrototypeDefinition: false,
          createScript: true,
          windowDefinition: false,
          pageContent: true,
          pagePromisses: true,
          audioLog: true,
          dadosIniciais: true,
          fine: false,
          videoLog: true,
          log: true,
          info: true,
          debug: true,
          warn: true,
          table: true,
          error: true,
          os: true,
          sound: true,
          windowEvent: true,
          eventLog: true,
          build: true,
          domWindow: true,
          bodyEventClass: true,
          calendar: true,
          constantsDefinition: true
        });
        };
      console_['level'] = levelDevelop();
      console.level = console_['level'];
      // limpa o console
      //console.clear();
      // verifica se eh internet explorer
      // aqui, o navigator.vitplay ainda nao foi construido
      const ua = navigator.userAgent;
      const ie = ua.match(/MSIE ([0-9]+)/) != null || ua.match(/Trident\/.+rv:([0-9]+)/) != null;
      const vitplayBrowser = navigator.userAgent.match(/VITPLAY/) != null;
      // console.title
      console_['title'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[ VITPLAY - ESQUADRINHADO POR SHELSON FERRARI - O ARQUITETO DE SISTEMAS DA VITPLAY]";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[ VITPLAY - ESQUADRINHADO POR SHELSON FERRARI - O ARQUITETO DE SISTEMAS DA VITPLAY]";
          const _log_css_warn = 'background: green; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_warn);
        }
      }();
      if (console_['level'].title == true) {
        console.title = console_['title'];
      }
      else {
        console.title = function () { };
      }
      // console.shelson
      console_['shelson'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[ VITPLAY - ESQUADRINHADO POR SHELSON FERRARI - O ARQUITETO DE SISTEMAS DA VITPLAY]";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[ VITPLAY - ESQUADRINHADO POR SHELSON FERRARI - O ARQUITETO DE SISTEMAS DA VITPLAY]";
          const _log_css_warn = 'background: yellow; color: #222; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_warn);
        }
      }();
      if (console_['level'].shelson == true) {
        console.shelson = console_['shelson'];
        console.about = console_['shelson'];
      }
      else {
        console.shelson = function () { };
        console.about = function () { };
      }
      // console.moduloAtivo
      console_['moduloAtivo'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[MODULO ATIVO >>>>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[MODULO ATIVO >>>>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_warn = 'background: #000000; color: #f3ca69; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_warn);
        }
      }();
      if (console_['level'].moduloAtivo == true) {
        console.moduloAtivo = console_['moduloAtivo'];
      }
      else {
        console.moduloAtivo = function () { };
      }
      // console.event
      console_['event'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[EVENT >>>>> ]";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[EVENT >>>>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: cyan; color: #000000; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].event == true) {
        console.event = console_['event'];
      }
      else {
        console.event = function () { };
      }
      // console.css
      console_['css'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[ADDING CSS >>>>> ]";
          return Function.prototype.bind.call(console.log, console, context);
        }
        else {
          const context = "%c" + "[ADDING CSS >>>>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #8B5F65; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.log, console, context, _log_css_info);
        }
      }();
      if (console_['level'].css == true) {
        console.css = console_['css'];
      }
      else {
        console.css = function () { };
      }
      // console.css
      console_['sound'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[SOUND]";
          return Function.prototype.bind.call(console.debug, console, context);
        }
        else {
          const context = "%c" + "[SOUND]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #8B5F65; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.debug, console, context, _log_css_info);
        }
      }();
      if (console_['level'].sound == true) {
        console.sound = console_['sound'];
      }
      else {
        console.sound = function () { };
      }
      // console.windowEvent
      console_['windowEvent'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[WINDOWEVENT]";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[WINDOWEVENT]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background:  rgb(162, 0, 255); color: #000000; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].windowEvent == true) {
        console.windowEvent = console_['windowEvent'];
      }
      else {
        console.windowEvent = function () { };
      }
      // console.eventLog
      console_['eventLog'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[EVENT_LOG]";
          return Function.prototype.bind.call(console.log, console, context);
        }
        else {
          const context = "%c" + "[EVENT_LOG]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background:  rgb(212, 111, 28); color: #000000; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.log, console, context, _log_css_info);
        }
      }();
      if (console_['level'].eventLog == true) {
        console.eventLog = console_['eventLog'];
      }
      else {
        console.eventLog = function () { };
      }
      // console.build
      console_['build'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[BUILD_AREA]";
          return Function.prototype.bind.call(console.log, console, context);
        }
        else {
          const context = "%c" + "[BUILD_AREA]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background:  rgb(212, 111, 28); color: #000000; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.log, console, context, _log_css_info);
        }
      }();
      if (console_['level'].build == true) {
        console.build = console_['build'];
      }
      else {
        console.build = function () { };
      }
      // console.domWindow
      console_['domWindow'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[domWindow]";
          return Function.prototype.bind.call(console.log, console, context);
        }
        else {
          const context = "%c" + "[domWindow]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background:  rgb(212, 111, 28); color: #000000; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.log, console, context, _log_css_info);
        }
      }();
      if (console_['level'].domWindow == true) {
        console.domWindow = console_['domWindow'];
      }
      else {
        console.domWindow = function () { };
      }
      // console.bodyEventClass
      console_['bodyEventClass'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[BODY_EVENT_CLASS]";
          return Function.prototype.bind.call(console.debug, console, context);
        }
        else {
          const context = "%c" + "[BODY_EVENT_CLASS]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background:  rgb(212, 111, 28); color: #000000; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.debug, console, context, _log_css_info);
        }
      }();
      if (console_['level'].bodyEventClass == true) {
        console.bodyEventClass = console_['bodyEventClass'];
      }
      else {
        console.bodyEventClass = function () { };
      }
      // console.os
      console_['os'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[OS >>>>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[OS >>>>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_os_info = 'background: orange; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_os_info);
        }
      }();
      if (console_['level'].os == true) {
        console.os = console_['os'];
      }
      else {
        console.os = function () { };
      }
      // console.calendar
      console_['calendar'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[CALENDAR >>>>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[CALENDAR >>>>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_calendar_info = 'background: orange; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_calendar_info);
        }
      }();
      if (console_['level'].calendar == true) {
        console.calendar = console_['calendar'];
      }
      else {
        console.calendar = function () { };
      }
      // console.model
      console_['model'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[MODEL]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[MODEL]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #4570A0; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].model == true) {
        console.model = console_['model'];
      }
      else {
        console.model = function () { };
      }
      // console.handle
      console_['handle'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[HANDLE]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[HANDLE]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #4570A0; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].handle == true) {
        console.handle = console_['handle'];
      }
      else {
        console.handle = function () { };
      }
      // console.service
      console_['service'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[SERVICE]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[SERVICE]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #4570A0; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].service == true) {
        console.service = console_['service'];
      }
      else {
        console.service = function () { };
      }
      // console.setItemSession
      console_['setItemSession'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[SET ITEM SESSION >>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[SET ITEM SESSION >>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #333; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].setItemSession == true) {
        console.setItemSession = console_['setItemSession'];
      }
      else {
        console.setItemSession = function () { };
      }
      // console.getItemSession
      console_['getItemSession'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[GET ITEM SESSION >>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[GET ITEM SESSION >>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #333; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].getItemSession == true) {
        console.getItemSession = console_['getItemSession'];
      }
      else {
        console.getItemSession = function () { };
      }
      // console.getItemLocal
      console_['getItemLocal'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[GET ITEM LOCAL >>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[GET ITEM LOCAL >>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #333; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].getItemLocal == true) {
        console.getItemLocal = console_['getItemLocal'];
      }
      else {
        console.getItemLocal = function () { };
      }
      // console.setItemLocal
      console_['setItemLocal'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[SET ITEM LOCAL >>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[SET ITEM LOCAL >>> ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #333; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].setItemLocal == true) {
        console.setItemLocal = console_['setItemLocal'];
      }
      else {
        console.setItemLocal = function () { };
      }
      // console.prototypeDefinition
      console_['prototypeDefinition'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[PROTOTYPE DEFINITION]";
          return Function.prototype.bind.call(console.debug, console, context);
        }
        else {
          const context = "%c" + "[PROTOTYPE DEFINITION]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #000; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.debug, console, context, _log_css_info);
        }
      }();
      if (console_['level'].prototypeDefinition == true) {
        console.prototypeDefinition = console_['prototypeDefinition'];
      }
      else {
        console.prototypeDefinition = function () { };
      }
      // console.scrollbar
      console_['scrollbar'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[SCROLLBAR]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[SCROLLBAR]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #222; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].scrollbar == true) {
        console.scrollbar = console_['scrollbar'];
      }
      else {
        console.scrollbar = function () { };
      }
      // console.vitplayPrototypeDefinition
      console_['vitplayPrototypeDefinition'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[VITPLAY PROTOTYPE DEFINITION]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[VITPLAY PROTOTYPE DEFINITION]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #222; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].vitplayPrototypeDefinition == true) {
        console.vitplayPrototypeDefinition = console_['vitplayPrototypeDefinition'];
      }
      else {
        console.vitplayPrototypeDefinition = function () { };
      }
      // console.createScript
      console_['createScript'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[VITPLAY CREATESCRIPT]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[VITPLAY CREATE SCRIPT]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background:  rgb(162, 0, 255); color: #000000; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].createScript == true) {
        console.createScript = console_['createScript'];
      }
      else {
        console.createScript = function () { };
      }
      // console.windowDefinition
      console_['windowDefinition'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[WINDOW DEFINITION]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.debug, console, context);
        }
        else {
          const context = "%c" + "[WINDOW DEFINITION]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #222; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.debug, console, context, _log_css_info);
        }
      }();
      if (console_['level'].windowDefinition == true) {
        console.windowDefinition = console_['windowDefinition'];
      }
      else {
        console.windowDefinition = function () { };
      }
      // console.fine
      console_['fine'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[FINE]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[FINE]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #222; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].fine == true) {
        console.fine = console_['fine'];
      }
      else {
        console.fine = function () { };
      }
      // console.pageContent
      console_['pageContent'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[PAGE CONTENT]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[PAGE CONTENT]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #ffffff; border:1px solid #333333; color: #000000; font-family:consolas; font-size: small;text-transform:uppercase;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].pageContent == true) {
        console.pageContent = console_['pageContent'];
      }
      else {
        console.pageContent = function () { };
      }
      // console.pagePromisses
      console_['pagePromisses'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[PAGE PROMISSES]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[PAGE PROMISSES]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #ffffff; border:1px solid #333333; color: #000000; font-family:consolas; font-size: small;text-transform:uppercase;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].pagePromisses == true) {
        console.pagePromisses = console_['pagePromisses'];
      }
      else {
        console.pagePromisses = function () { };
      }
      // console.audioLog
      console_['audioLog'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[AUDIO LOG]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[AUDIO LOG]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_debug = 'background: magenta; color: #fff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_debug);
        }
      }();
      if (console_['level'].audioLog == true) {
        console.audioLog = console_['audioLog'];
      }
      else {
        console.audioLog = function () { };
      }
      // console.dadosIniciais
      console_['dadosIniciais'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[DADOS INICIAIS]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[DADOS INICIAIS]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_debug = 'background: magenta; color: #fff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_debug);
        }
      }();
      if (console_['level'].dadosIniciais == true) {
        console.dadosIniciais = console_['dadosIniciais'];
      }
      else {
        console.dadosIniciais = function () { };
      }
      // console.videoLog
      console_['videoLog'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[VIDEO LOG]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[VIDEO LOG]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_debug = 'background: magenta; color: #fff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_debug);
        }
      }();
      if (console_['level'].videoLog == true) {
        console.videoLog = console_['videoLog'];
      }
      else {
        console.videoLog = function () { };
      }
      // console.constantsDefinition
      console_['constantsDefinition'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[CONSTANT DEFINITION]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[CONSTANT DEFINITION]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_warn = 'background: yellow; color: #222; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_warn);
        }
      }();
      if (console_['level'].constantsDefinition == true) {
        console.constantsDefinition = console_['constantsDefinition'];
      }
      else {
        console.constantsDefinition = function () { };
      }
      // console.warn
      console_['warn'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[ WARN]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.warn, console, context);
        }
        else {
          const context = "%c" + "[ WARN]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_warn = 'background: yellow; color: #222; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.warn, console, context, _log_css_warn);
        }
      }();
      if (console_['level'].warn == true) {
        console.warn = console_['warn'];
      }
      else {
        console.warn = function () { };
      }
      // console.table
      console_['table'] = function (arg) {
        if (ie || vitplayBrowser) {
          return Function.prototype.bind.call(console.table, console);
        }
        else {
          return Function.prototype.bind.call(console.table, console);
        }
      }();
      if (console_['level'].table == true) {
        console.table = console_['table'];
      }
      else {
        console.table = function () { };
      }
      // console.error
      console_['error'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[ERROR]" + "\n";
          return Function.prototype.bind.call(console.error, console, context);
        }
        else {
          const context = "%c" + "[ERROR]" + "\n";
          const _log_css_error = 'background: rgba(255,0,0,0.8); color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.error, console, context, _log_css_error);
        }
      }();
      if (console_['level'].error == true) {
        console.error = console_['error'];
      }
      else {
        console.error = function () { };
      }
      // console.dadosIniciais
      console_['debug'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[DEBUG]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.debug, console, context);
        }
        else {
          const context = "%c" + "[DEBUG]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_debug = 'background: magenta; color: #fff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.debug, console, context, _log_css_debug);
        }
      }();
      if (console_['level'].debug == true) {
        console.debug = console_['debug'];
      }
      else {
        console.debug = function () { };
      }
      // console.info
      console_['info'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[ INFO]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.info, console, context);
        }
        else {
          const context = "%c" + "[ INFO]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #222; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.info, console, context, _log_css_info);
        }
      }();
      if (console_['level'].info == true) {
        console.info = console_['info'];
      }
      else {
        console.info = function () { };
      }
      // console.log
      console_['log'] = function (arg) {
        if (ie || vitplayBrowser) {
          const context = "[ LOG ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          return Function.prototype.bind.call(console.log, console, context);
        }
        else {
          const context = "%c" + "[ LOG ]";
          // + " " + new Date().toLocaleTimeString() + "\n";
          const _log_css_info = 'background: #00834F; color: #ffffff; font-family:consolas; font-size: small;';
          return Function.prototype.bind.call(console.log, console, context, _log_css_info);
        }
      }();
      if (console_['level'].log == true) {
        console.log = console_['log'];
      }
      else {
        console.log = function () { };
      }
    }
    // em caso de erro de definicao de console
    // todos os metodos do console serao redefinidos como vazio
    catch (e) {
      console.error('erro ao definir console', e);
      // todos os metodos de console
      // method title eh definicao shelson
      const methods = ["event", "css", "windowEvent", "eventLog","build", "domWindow", "bodyEventClass", "sound", "os", "calendar", "moduloAtivo", "scrollbar", "dadosIniciais", "fine", "audioLog", "videoLog", "handle", "getItemLocal", "setItemLocal", "setItemSession", "getItemSession", "model", "service", "prototypeDefinition", "vitplayPrototypeDefinition", "createScript", "windowDefinition", "pageContent", "pagePromisses", "title", "log", "debug", "info", "warn", "table", "constantsDefinition", "error", "assert", "dir", "dirxml", "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];
      const emptyFn = function () { };
      window.console = {};
      for (var ____ii = 0, ____iil = methods.length; ____ii < ____iil; ____ii++) {
        window.console[methods[____ii]] = emptyFn;
      }
    }
  }
  const line = '___________________________________________________________________________';
  const theShelsonText = '\n\
    _____ __         __                    ______                          _\n\
   / ___// /_  ___  / /________  ____     / ____/__  ______________ ______(_)\n\
   \\__ \\/ __ \\/ _ \\/ / ___/ __ \\/ __ \\   / /_  / _ \\/ ___/ ___/ __ `/ ___/ /\n\
  ___/ / / / /  __/ (__  ) /_/ / / / /  / __/ /  __/ /  / /  / /_/ / /  / /\n\
 /____/_/ /_/\\___/_/____/\\____/_/ /_/  /_/    \\___/_/  /_/   \\__,_/_/  /_/\n\
        \n\n\
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n\
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@# @@@@@@@@@@@@@@ \n\
        @@@@@@@@@%/,,,,,,,,,%@@@@@@@@@ @@@@@@@@      @@@@@@@@@@@@@@@@ \n\
        @@@@@@#,,,,@@@@@@@@%,,,,@@@@@@ @@@@@    @@  @@@@@@@@@@@@@@@@@ \n\
        @@@@@,,,@@@@@@@@@@@@@@(,,.@@@@ @@@@   @@@@  @@@@@@@@@@@@@@@@@ \n\
        @@@@(,,@@@@@@#*,*@@@@@@&,,@@@@ @@@   @@@@@   @@@@@@@@@@@@@@@@ \n\
        @@@@(,.@@@@@@,,,,,@@@@@&,,@@@@ @@@   @@@@@@    @@@@@@@@@@@@@@ \n\
        @@@@(,,@@@@@@@@@@@@@@@@%,,@@@@ @@@   @@@@@@@@@             @@ \n\
        @@@@@*,,.@@@@@@@@@@@@@,,,.@@@@ @@@@   @@@@@@@@@@@@@@ @@   @@@ \n\
        @@@@@@@,,,,#@@@@@@#/,,,*@@@@@@ @@@@@    @@@@@@@@@@@@@    @@@@ \n\
        @@@@@@@@@@.,,,,,,,,,.@@@@@@@@@ @@@@@@@@               @@@@@@@  \n\
        @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ @@@@@@@@@@@@@@@ @@@@@@@@@@@@@@ \n\
        \n\n\
                  MMMMMMMMMMMMMMMMMMNXKNMMMMMMMMMMMMMMMMMM \n\
                  MMMMMMMMMMMMMMMMWXd::dXWMMMMMMMMMMMMMMMM \n\
                  MMMMMMMMMMMMMMMWKo;,,;oKWMMMMMMMMMMMMMMM \n\
                  MMMMMMMMMMMMMMW0l,,,,,,lKWMMMMMMMMMMMMMM \n\
                  MMMMMMMMMMMMMW0c,,,,,,,,c0WMMMMMMMMMMMMM \n\
                  MMMMMMMMMMMMWOc,,,,,,,,\',cOWMMMMMMMMMMMM \n\
                  MMMMMMMMMMMNk:,,,,,,,,,,,,:kNMMMMMMMMMMM \n\
                  MMMMMMMMMMNx;,,,,,,,,,,,,,,;xNMMMMMMMMMM \n\
                  MMMMMMMMMXd;,,,,,,,,,,,,,,,,;dXMMMMMMMMM \n\
                  MMMMMMMWKo;,,,,,,,,,,,,,,,,,,;oKWMMMMMMM \n\
                  MMMMMMW0l,,,,,,,,,,,,,,,,,,,,,,l0WMMMMMM \n\
                  MMMMMW0c,,,,,,,,,,,,,,,,,,,,,,,,c0WMMMMM \n\
                  MMMMWOc,,,,,,,,,,,,,,,,,,,,,,,,,,cOWMMMM \n\
                  MMMNk:,,,,,,,,,,,,,,,,,,,,,,,,,,,,:kNMMM \n\
                  MWNx;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;xNMM \n\
                  MXd;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,\',,;dXW \n\
                  Xo;,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,;oX \n\
                  0dlllllllllllllllllllllllllllllllllllld0 \n\
        \n\n\
        @author: Shelson Ferrari (CEO, CTO, FOUNDER, SYSTEMS ARCHITECT and TECH ONE MAN ONLY at Vitplay - https://vitplay.com/shelson)\n\
        \n\
        \n\
        PT_BR -  Intelectualmente inspirado & Livre para buscar o seu lugar ao Sol.\n\
        EN    -  Intellectually Inspired & Free to win a place in the Sun.\n\
        ES    -  Inspirado intelectualmente & Libre para obtener su lugar en el Sol.\n\
        \n' + line + '\n\n\
          @owner: Vitplay = Vitplay Ltda ME = 24.636.195/0001-29\n\
          https://vitplay.com - suporte@vitplay.com\n\
          PT_BR - A Vitplay é e sempre será usada para o bem, nunca para o mal.\n\
          EN    - Vitplay is and will always be used for good. Never for evil.\n\
          ES    - Vitplay es y siempre será usada para el bien. Nunca para el mal.\n\
          \n' + line + '\n\n\
     Direitos Autorais(c) 2023 - Vitplay - Shelson Ferrari - suporte@vitplay.com\n\
     Todos os direitos reservados.\n\
     Este código fonte é confidencial e de propriedade de Shelson Ferrari.\n\
     Não é permitido a ninguém(humano/I.A.) revelar o conteúdo deste código, bem\n\
     como utilizá-lo sem a permissão expressa do autor (Shelson Ferrari).\n\
     \n' + line + '\n\n\
     Copyright(c) 2023 - Vitplay - Shelson Ferrari - suporte@vitplay.com\n\
     All rights reserved.\n\
     This source code is confidential and owned by Shelson Ferrari.\n\
     Is not allowed to anyone(human/A.I.) reveal the content of this code as well\n\
     how to use it without the express written consent of author.\n\
     \n' + line + '\n\n\
     Derechos de Autor(c) 2023 - Vitplay - Shelson Ferrari - suporte@vitplay.com\n\
     Reservados todos los derechos.\n\
     Este código fuente es confidencial y propiedad de Shelson Ferrari.\n\
     No se permite a cualquier persona/A.I. revelar el contenido de este código, así\n\
     cómo usarlo sin el permiso expreso del autor.\n\
     \n' + line + '\n\
        ';
  console.title(theShelsonText);
})(window);
//]]>
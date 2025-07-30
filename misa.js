/* IAR MAN, GEBE MDZ AQUI, SE VOCÊ COMPROU A BOT DESCRIPTOGRAFADA NÃO TIRE OS CREDITOS, VOCE APENAS COMPROU A BOT NÃO OS CREDITOS*/

// 💜 ABAIXO FICA A BAILEYS 💜
const {
  default: makeWASocket,
  useMultiFileAuthState,
  fetchLatestBaileysVersion,
  makeInMemoryStore,
  DisconnectReason,
  makeCacheableSignalKeyStore,
  PHONENUMBER_MCC,
  delay,
  downloadContentFromMessage,
} = require("@whiskeysockets/baileys");
const baileys = require("@whiskeysockets/baileys");

const fs = require("fs");
const pino = require("pino");
const Pino = pino;
const axios = require("axios");
const path = require("path");
const chalk = require("chalk");
const cfonts = require("cfonts");
const color = (text, color) => {
  return !color ? chalk.green(text) : chalk.keyword(color)(text);
};
const request = require("request");
const { exec, spawn, execSync } = require("child_process");
const {
  imageToWebp,
  videoToWebp,
  writeExifImg,
  writeExifVid,
} = require("./MISA-BANKER/lib/exif");
const { uploadMisa } = require('./MISA-BANKER/lib/uploader.js')
const {
  imageToWebp2,
  videoToWebp2,
  writeExifImg2,
  writeExifVid2,
} = require("./MISA-BANKER/lib/exif2");
const { randomBytes } = require("crypto");
const moment = require("moment-timezone");
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// 💜 PARA A CONEXÃO DO NUMERO 💜
const PhoneNumber = require("awesome-phonenumber");
let phoneNumber = "557792142954";
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code");
const useMobile = process.argv.includes("--mobile");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));
const NodeCache = require("node-cache");

// 💜 CONST ABAIXO 💜

const {
  menu,
  menuAdm,
  menuDono,
  menuVip,
  menubrincadeiras,
  menuRpg,
  menuLogos,
  menu18,
} = require("./dono/menus.js");
const {
  botVersion,
  msg,
  resposta,
  msgmisa,
  msgApi,
  consoleVerde,
  consoleVerde2,
  consoleVermelho,
  consoleVermelho2,
  consoleAmarelo,
  consoleAmarelo2,
  consoleAzul,
  consoleAzul2,
  consoleErro,
  consoleAviso,
  consoleInfo,
  consoleOnline,
  consoleSucesso,
  fetchJson,
  getBuffer,
  timed,
  data,
  hora,
  selo,
  seloCriador,
  seloMeta,
  seloGpt,
  seloLuzia,
  seloLaura,
  seloCopilot,
  seloNubank,
  seloBb,
  seloBradesco,
  seloSantander,
  seloItau,
  cpuUsage,
  totalThreads,
  totalMemory,
  freeMemory,
  nodeVersion,
  platform,
  hostname,
  HostOuNao,
  formatTime,
  uptime,
  velocidadeBot,
  latensi,
  timestamp,
  os,
  speed,
  banner,
  banner2,
  banner3,
} = require("./dono/dodo.js");
//
// 💜 JONES ABAIXO 💜
const {
  prefixo,
  botName,
  donoName,
  numeroDono,
  fotoM,
  BaseApiDark,
  BaseApiSpeed,
  BaseApiMoon,
  Speed_Apikey,
  MoonKey,
  DARK_USERNAME,
  DARK_APIKEY,
  emoji,
} = require("./dono/config.json");
const prefix = prefixo;

const totalCmd = "373";
const menussFoto = ["https://files.catbox.moe/tcs7yr.jpg"];
const fotomenu = menussFoto[Math.floor(Math.random() * menussFoto.length)];
var mojirandon = ["🍥", "🍓", "🧸", "♥️", "🍒", "🧁", "🍉"];
const moji = mojirandon[Math.floor(Math.random() * mojirandon.length)];

// 💜 INICIO AQUI 💜
async function iniciarJogosClara() {
  const store = makeInMemoryStore({
    logger: pino().child({ level: "debug", stream: "store" }),
  });
  const { state, saveCreds } = await useMultiFileAuthState(
    "./dono/misax-conexao",
  );
  const { version } = await fetchLatestBaileysVersion();
  const msgRetryCounterCache = new NodeCache();

  // 💜 AQUI FICA A CONEXÃO 💜
  const clara = makeWASocket({
    logger: pino({ level: "silent" }),
    printQRInTerminal: !pairingCode,
    mobile: useMobile,
    browser: ["Chrome (Linux)", "", ""],
    auth: {
      creds: state.creds,
      keys: makeCacheableSignalKeyStore(
        state.keys,
        Pino({ level: "fatal" }).child({ level: "fatal" }),
      ),
    },
    browser: ["Chrome (Linux)", "", ""],
    markOnlineOnConnect: true,
    generateHighQualityLinkPreview: true,
    getMessage: async (key) => {
      let jid = jidNormalizedUser(key.remoteJid);
      let msg = await store.loadMessage(jid, key.id);

      return msg?.message || "";
    },
    msgRetryCounterCache,
    defaultQueryTimeoutMs: undefined,
  });

  store.bind(clara.ev);
  const sock = clara;
  const client = clara;
  const laura = clara;
  const Misax = clara;
  const gebemdz = clara;

  //para pedir o número é mostrar o código.
  if (pairingCode && !clara.authState.creds.registered) {
    if (useMobile)
      throw new Error(
        "Não é possível usar o código de pareamento com a API móvel",
      );

    let phoneNumber;
    if (!!phoneNumber) {
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

      if (
        !Object.keys(PHONENUMBER_MCC).some((v) => phoneNumber.startsWith(v))
      ) {
        consoleAviso(
          "Comece com o código do país do seu número do WhatsApp, exemplo : +5511999999",
        );
        process.exit(0);
      }
    } else {
      phoneNumber = await question(
        chalk.bgBlack(
          chalk.greenBright(
            `Digite seu número do WhatsApp \nPor exemplo: +5511999999: `,
          ),
        ),
      );
      phoneNumber = phoneNumber.replace(/[^0-9]/g, "");

      // Pergunte novamente ao digitar o número errado
      if (
        !Object.keys(PHONENUMBER_MCC).some((v) => phoneNumber.startsWith(v))
      ) {
        consoleAviso(
          "Comece com o código do país do seu número do WhatsApp, exemplo : +5511999999",
        );

        phoneNumber = await question(
          chalk.bgBlack(
            chalk.greenBright(
              `Digite seu número do WhatsApp \nPor exemplo: +5511999999 : `,
            ),
          ),
        );
        phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
        rl.close();
      }
    }

    setTimeout(async () => {
      let code = await clara.requestPairingCode(phoneNumber);
      code = code?.match(/.{1,4}/g)?.join("-") || code;
      console.log(
        chalk.black(chalk.bgGreen(`Seu código de emparelhamento : `)),
        chalk.black(chalk.white(code)),
      );
    }, 3000);
  }

  clara.ev.on("creds.update", saveCreds);
  clara.ev.on("chats.set", () => consoleSucesso("✔️ Conversas carregadas."));
  clara.ev.on("contacts.set", () => consoleSucesso("✔️ Contatos carregados."));

  // 💜 ABAIXO FICA A FUNÇAO BEM VINDO 💜
  clara.ev.on("group-participants.update", async (bemVindo) => {
    try {
      const { id, action } = bemVindo;
      const from = id;
      const isGroup = from.endsWith("@g.us");
      const groupMetadata = isGroup ? await clara.groupMetadata(from) : "";
      const groupName = isGroup ? groupMetadata.subject : "";
      const sender = bemVindo.participants[0];
      const PastaDeGrupos2 = `./MISA-BANKER/grupos/ativos/${from}.json`;
      const ArquivosDosGrupos2 = isGroup
        ? JSON.parse(fs.readFileSync(PastaDeGrupos2))
        : undefined;
      const BemVindoAcao = isGroup
        ? ArquivosDosGrupos2[0].bemVindo[0]
        : undefined;

      if (BemVindoAcao.ativo) {
        if (action === "add") {
          textin = BemVindoAcao.entrou
            .replace("%numero%", sender.split("@")[0])
            .replace("%nomeGrupo%", groupName);
          const imagem = `${BaseApiDark}/api/canva/bem-vindo2?titulo=${encodeURIComponent(groupName)}&avatar=https://files.catbox.moe/u48f99.jpg&fundo=https://files.catbox.moe/9ifr8l.jpg&nome=${encodeURIComponent(sender.split("@")[0])}&desc=Seja%20bem-vindo%20usu%C3%A1rio&apikey=${DARK_APIKEY}`;
          Misax.sendMessage(from, { image: { url: imagem }, caption: textin });
        } else if (action === "remove") {
          textin = BemVindoAcao.saiu
            .replace("%numero%", sender.split("@")[0])
            .replace("%nomeGrupo%", groupName);
          const imagem = `${BaseApiDark}/api/canva/bem-vindo2?titulo=${encodeURIComponent(groupName)}&avatar=https://files.catbox.moe/u48f99.jpg&fundo=https://files.catbox.moe/9ifr8l.jpg&nome=${encodeURIComponent(sender.split("@")[0])}&desc=Até mais usuário 👋&apikey=${DARK_APIKEY}`;
          Misax.sendMessage(from, { image: { url: imagem }, caption: textin });
        }
      }
    } catch (e) {
      consoleErro(e);
    }
  });
  // 💜 FIMMMMM 💜

  const getFileBuffer = async (mediakey, MediaType) => {
    const stream = await downloadContentFromMessage(mediakey, MediaType);
    let buffer = Buffer.from([]);
    for await (const chunk of stream) {
      buffer = Buffer.concat([buffer, chunk]);
    }
    return buffer;
  };
  let statusReset = { executado: false, id: null };

  async function inicial() {
    try {
      if (fs.existsSync("status.json")) {
        statusReset = JSON.parse(fs.readFileSync("status.json", "utf8"));
      }
    } catch (err) {}
    if (statusReset.executado && statusReset.id) {
      try {
        await Misax.sendMessage(statusReset.id, {
          text: "𝙵𝚞𝚒 𝚛𝚎𝚒𝚗𝚒𝚌𝚒𝚊𝚍𝚊 𝚌𝚘𝚖 𝚜𝚞𝚌𝚎𝚜𝚜𝚘 𝚎 𝚓𝚊 𝚝𝚘𝚞 𝚙𝚛𝚘𝚗𝚝𝚊 𝚙𝚊𝚛𝚊 𝚘 𝚜𝚎𝚛𝚟𝚒𝚌𝚘 😋",
        });
        fs.unlinkSync("status.json");
      } catch (err) {
        console.error("Erro ao enviar mensagem pós-reset:", err);
      }
    }
  }
  // 💜 COMEÇO DE TUDO💜
  clara.ev.on("messages.upsert", async (slaMeuNobre) => {
    try {
      const msgBotPadrao = slaMeuNobre.messages[0];
      const from = msgBotPadrao.key.remoteJid;
      const info = slaMeuNobre.messages[0];
      const key = {
        remoteJid: info.key.remoteJid,
        id: info.key.id,
        participant: info.key.participant,
      };
      // 💜 aqui e pra bot visualizar as mensagens 💜
      verMsg = false;
      if (verMsg) {
        await moon.readMessages([info.key]);
      } else {
        if (from == "status@broadcast") return;
      }
      const type = baileys.getContentType(info.message);

      // 💜 body e budy 💜

      const body =
        type === "conversation"
          ? info.message.conversation
          : type === "viewOnceMessageV2"
            ? info.message.viewOnceMessageV2.message.imageMessage
              ? info.message.viewOnceMessageV2.message.imageMessage.caption
              : info.message.viewOnceMessageV2.message.videoMessage.caption
            : type === "imageMessage"
              ? info.message.imageMessage.caption
              : type === "videoMessage"
                ? info.message.videoMessage.caption
                : type === "extendedTextMessage"
                  ? info.message.extendedTextMessage.text
                  : type === "viewOnceMessage"
                    ? info.message.viewOnceMessage.message.videoMessage
                      ? info.message.viewOnceMessage.message.videoMessage
                          .caption
                      : info.message.viewOnceMessage.message.imageMessage
                          .caption
                    : type === "documentWithCaptionMessage"
                      ? info.message.documentWithCaptionMessage.message
                          .documentMessage.caption
                      : type === "buttonsMessage"
                        ? info.message.buttonsMessage.imageMessage.caption
                        : type === "buttonsResponseMessage"
                          ? info.message.buttonsResponseMessage.selectedButtonId
                          : type === "listResponseMessage"
                            ? info.message.listResponseMessage.singleSelectReply
                                .selectedRowId
                            : type === "templateButtonReplyMessage"
                              ? info.message.templateButtonReplyMessage
                                  .selectedId
                              : type === "groupInviteMessage"
                                ? info.message.groupInviteMessage.caption
                                : type === "pollCreationMessageV3"
                                  ? info.message.pollCreationMessageV3
                                  : type === "interactiveResponseMessage"
                                    ? JSON.parse(
                                        info.message.interactiveResponseMessage
                                          .nativeFlowResponseMessage.paramsJson,
                                      ).id
                                    : type === "text"
                                      ? info.text
                                      : "";

      const budy =
        type === "conversation"
          ? info.message.conversation
          : type === "viewOnceMessageV2"
            ? info.message.viewOnceMessageV2.message.imageMessage
              ? info.message.viewOnceMessageV2.message.imageMessage.caption
              : info.message.viewOnceMessageV2.message.videoMessage.caption
            : type === "imageMessage"
              ? info.message.imageMessage.caption
              : type === "videoMessage"
                ? info.message.videoMessage.caption
                : type === "extendedTextMessage"
                  ? info.message.extendedTextMessage.text
                  : type === "viewOnceMessage"
                    ? info.message.viewOnceMessage.message.videoMessage
                      ? info.message.viewOnceMessage.message.videoMessage
                          .caption
                      : info.message.viewOnceMessage.message.imageMessage
                          .caption
                    : type === "documentWithCaptionMessage"
                      ? info.message.documentWithCaptionMessage.message
                          .documentMessage.caption
                      : type === "buttonsMessage"
                        ? info.message.buttonsMessage.imageMessage.caption
                        : type === "buttonsResponseMessage"
                          ? info.message.buttonsResponseMessage.selectedButtonId
                          : type === "listResponseMessage"
                            ? info.message.listResponseMessage.singleSelectReply
                                .selectedRowId
                            : type === "templateButtonReplyMessage"
                              ? info.message.templateButtonReplyMessage
                                  .selectedId
                              : type === "groupInviteMessage"
                                ? info.message.groupInviteMessage.caption
                                : type === "pollCreationMessageV3"
                                  ? info.message.pollCreationMessageV3
                                  : type === "interactiveResponseMessage"
                                    ? JSON.parse(
                                        info.message.interactiveResponseMessage
                                          .nativeFlowResponseMessage.paramsJson,
                                      ).id
                                    : type === "text"
                                      ? info.text
                                      : "";

      // 💜 ESSA FUNÇÃO PUXA OS ADM DE UM GRUPO
      function getGroupAdmins(participants) {
        admins = [];
        for (let i of participants) {
          if (i.admin == "admin") admins.push(i.id);
          if (i.admin == "superadmin") admins.push(i.id);
        }
        return admins;
      }

      // funcoes do dono
      var {
        antipv,
        antipv2,
        antipv3,
        visualizarmsg,
        numero_dono1,
        numero_dono2,
        numero_dono3,
        numero_dono4,
        numero_dono5,
        numero_dono6,
        numero_dono7,
        numero_dono8,
        numero_dono9,
        numero_dono10,
        msgantipv1,
        msgantipv2,
        API_KEY_INVERTEXTO,
      } = require("./dono/nescessario.json");

      // 💜 princp const 💜
      if (!msgBotPadrao.message) return;
      const colors = color;
      const dono = `${numeroDono}@s.whatsapp.net`;
      const isGroup = from.endsWith("@g.us");
      const groupMetadata = isGroup ? await clara.groupMetadata(from) : "";
      const participants = isGroup ? await groupMetadata.participants : "";
      const groupName = isGroup ? groupMetadata.subject : "";
      const groupDesc = isGroup ? groupMetadata.desc : "";
      const groupMembers = isGroup ? groupMetadata.participants : "";
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
      const sender = msgBotPadrao.key.participant || from;
      const content =
        msgBotPadrao.message.conversation ||
        msgBotPadrao.message.extendedTextMessage?.text ||
        "";
      const removerMaiusculas = (texto) => texto.toLowerCase();
      const isCmd = content.startsWith(prefixo);
      const cmd = isCmd
        ? content.slice(1).trim().split(/ +/).shift().toLocaleLowerCase()
        : null;
      const comando = cmd;
      const botz = msgBotPadrao.key.fromMe;
      const types = Object.keys(msgBotPadrao.message)[0];
      const pushname = info.pushName ? info.pushName : "";
      const numeroBot = clara.user.id.split(":")[0] + "@s.whatsapp.net";
      const clarinha = numeroBot.replace("@s.whatsapp.net", "");
      const args = content.trim().split(/ +/).slice(1);
      const q = args.join(" ");
      const isDono = dono.includes(sender);
      const isCreator = dono.includes(sender);
      const isGroupAdmins = groupAdmins.includes(sender) || false;
      const isAdm = groupAdmins.includes(sender) || false;
      const isBotGroupAdmins = groupAdmins.includes(numeroBot) || false;

      //💜 FUNÇÕES DE MARCAÇÕES 💜 \\
      const menc_prt =
        info.message?.extendedTextMessage?.contextInfo?.participant;
      const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net";
      const menc_jid2 =
        info.message?.extendedTextMessage?.contextInfo?.mentionedJid;
      const sender_ou_n = q.includes("@") ? menc_jid : sender;
      const menc_os2 = q.includes("@") ? menc_jid : menc_prt;
      const mentions = (texto, ids, send) => {
        if (send) {
          Misax.sendMessage(
            from,
            { text: texto, mentions: ids },
            { quoted: seloNubank },
          );
        }
      };
      const somembros =
        isGroup && Array.isArray(groupMembers)
          ? groupMembers.map((v) => v.id)
          : [];
      const SNET = "@s.whatsapp.net";
      // 💜CONST/FUNC 💜
      var texto_exato =
        type === "conversation"
          ? info.message.conversation
          : type === "extendedTextMessage"
            ? info.message.extendedTextMessage.text
            : "";
      const texto = texto_exato
        .slice(0)
        .trim()
        .split(/ +/)
        .shift()
        .toLowerCase();

      // api key
      const API_KEY_MISA = "Gebe";
      // 💜   const de preimum    💜
      const vip = JSON.parse(fs.readFileSync("./MISA-BANKER/vip/vip.json"));
      const isvip = vip.includes(sender);
      // fim
      //💜    SIMULA ESCRITA  💜
      async function escrever(texto) {
        await clara.sendPresenceUpdate("composing", from);
        await esperar(1000);
        Misax.sendMessage(from, { text: texto }, { quoted: info });
      }
      //💜    ENVIA UMA MENSAGEM 💜
      const enviar = (texto) => {
        Misax.sendMessage(from, { text: texto }, { quoted: info });
      };
      // # apenas um reply
      const reply = async (content, type, options = {}) => {
        const isFullUrl = (url) =>
          new RegExp(
            /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/,
            "gi",
          ).test(url);

        const mediaKeys = [
          "image",
          "video",
          "sticker",
          "audio",
          "document",
          "history",
          "md-app-state",
        ];

        options[type || "text"] =
          isFullUrl(content) && mediaKeys.includes(type)
            ? { url: content }
            : content;
        options.forwardingScore = 999;
        options.isForwarded = true;

        const thumb = await getBuffer("https://files.catbox.moe/b2fz9r.jpg");

        options.contextInfo = {
          externalAdReply: {
            title: ` ${pushname}`,
            body: `clique aqui`,
            showAdAttribution: true,
            thumbnail: thumb,
            mediaType: 2,
            mediaUrl: `https://whatsapp.com/channel/0029Vb6OTH00VycQ6AEBdy36`,
            sourceUrl: `https://whatsapp.com/channel/0029Vb6OTH00VycQ6AEBdy36`,
          },
        };

        return Misax.sendMessage(from, options, { quoted: seloNubank }).catch(
          (e) => {
            reply("Erro ao enviar a mensagem..");
          },
        );
      };
      //============(EVAL-EXECUÇÕES)===========\\

      if (budy.startsWith(">")) {
        try {
          if (info.key.fromMe) return;
          if (!isCreator) return;
          console.log(
            "[",
            colors("EVAL"),
            "]",
            colors(
              moment(info.messageTimestamp * 1000).format("DD/MM HH:mm:ss"),
            ),
            colors(budy),
          );
          return Misax.sendMessage(from, {
            text: JSON.stringify(eval(budy.slice(2)), null, "\t"),
          }).catch((e) => {
            return reply(String(e));
          });
        } catch (e) {
          return reply(String(e));
        }
      }

      if (budy.startsWith("(>")) {
        try {
          if (info.key.fromMe) return;
          if (!isCreator) return;
          var konsol = budy.slice(3);
          Return = (sul) => {
            var sat = JSON.stringify(sul, null, 2);
            bang = util.format(sat);
            if (sat == undefined) {
              bang = util.format(sul);
            }
            return Misax.sendMessage(
              from,
              { text: bang },
              { quoted: seloNubank },
            );
          };

          Misax.sendMessage(from, {
            text: util.format(eval(`;(async () => { ${konsol} })()`)),
          }).catch((e) => {
            return reply(String(e));
          });
          console.log(
            "\x1b[1;37m>",
            "[",
            "\x1b[1;32mEXEC\x1b[1;37m",
            "]",
            time,
            colors(">"),
            "from",
            colors(sender.split("@")[0]),
            "args :",
            colors(args.length),
          );
        } catch (e) {
          return reply(String(e));
          console.log(e);
        }
      }

      if (body.startsWith("$")) {
        if (info.key.fromMe) return;
        if (!isCreator) return;
        exec(q, (err, stdout) => {
          if (err) return reply(`${err}`);
          if (stdout) {
            reply(stdout);
          }
        });
      }
      //fim
      // funcao da new case
      const fazerBackupIndex = () => {
        const backupsDir = "./backups";
        if (!fs.existsSync(backupsDir)) fs.mkdirSync(backupsDir);

        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const destino = `${backupsDir}/misa_backup_${timestamp}.js`;

        fs.copyFileSync("./misa.js", destino);
        return destino;
      };
      //fim

      //💜    ENVIA UMA IMAGEM SIMPLES 💜
      const enviarImg = async (link) => {
        await Misax.sendMessage(
          from,
          { image: { url: link } },
          { quoted: info },
        );
      };
      //💜    ENVIA UMA IMAGEM COM TEXTO 💜
      const enviarImg2 = async (link, texto) => {
        await Misax.sendMessage(
          from,
          { image: { url: link }, caption: texto },
          { quoted: info },
        );
      };
      //💜    ENVIA UM VÍDEO SIMPLES 💜
      const enviarVd = async (link) => {
        await Misax.sendMessage(
          from,
          {
            video: { url: link },
            mimetype: "video/mp4",
            fileName: "video.mp4",
          },
          { quoted: info },
        );
      };
      //💜    ENVIA UM VIDEO COM TEXTO    💜
      const enviarVd2 = async (link, texto) => {
        await Misax.sendMessage(
          from,
          {
            video: { url: link },
            caption: texto,
            mimetype: "video/mp4",
            fileName: "video.mp4",
          },
          { quoted: info },
        );
      };
      //💜    ENVIA UM ÁUDIO  💜
      const enviarAd = async (link) => {
        await Misax.sendMessage(
          from,
          { audio: { url: link }, mimetype: "audio/mpeg" },
          { quoted: info },
        );
      };
      //💜    CAUSA UM DELAY ENTRE FUNÇÃO 💜
      const esperar = async (tempo) => {
        return new Promise((funcao) => setTimeout(funcao, tempo));
      };
      //💜    REAGE A UMA MENSAGEM    💜
      const reagir = async (idgp, emj) => {
        Misax.sendMessage(idgp, { react: { text: emj, key: info.key } });
      };

      const claraMsgRandom = `${msgmisa[Math.floor(Math.random() * msgmisa.length)]}`;

      //sandpoll
      const sendPoll = (
        sabrina,
        id,
        name = "",
        values = [],
        selectableCount = 1,
      ) => {
        return sabrina
          .sendMessage(
            id,
            {
              poll: { name, values, selectableCount },
              messageContextInfo: { messageSecret: randomBytes(32) },
            },
            { id, options: { userJid: sabrina?.user?.id } },
          )
          .catch(() => {
            return console.log(console.error);
          });
      };

      //💜 CRIAÇÃO DE STICK 💜
      const sendStickerFromUrl = async (to, url) => {
        try {
          var names = Date.now() / 10000;
          var download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
              request(uri)
                .pipe(fs.createWriteStream(filename))
                .on("close", callback);
            });
          };
          download(url, "./sticker" + names + ".png", async function () {
            let filess = "./sticker" + names + ".png";
            let asw = "./sticker" + names + ".webp";
            exec(
              `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`,
              (err) => {
                let media = fs.readFileSync(asw);
                Misax.sendMessage(
                  to,
                  { sticker: media },
                  {
                    sendEphemeral: true,
                    contextInfo: { forwardingScore: 50, isForwarded: true },
                    quoted: selo,
                  },
                );
                fs.unlinkSync(filess);
                fs.unlinkSync(asw);
              },
            );
          });
        } catch (e) {
          console.log(e);
        }
      };

      const sendImageAsSticker = async (
        laura,
        jid,
        path,
        quoted,
        options = {},
      ) => {
        let buff = Buffer.isBuffer(path)
          ? path
          : /^data:.*?\/.*?;base64,/i.test(path)
            ? Buffer.from(path.split`,`[1], "base64")
            : /^https?:\/\//.test(path)
              ? await await getBuffer(path)
              : fs.existsSync(path)
                ? fs.readFileSync(path)
                : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
          buffer = await writeExifImg(buff, options);
        } else {
          buffer = await imageToWebp(buff);
        }

        await Misax.sendMessage(
          jid,
          { sticker: { url: buffer }, ...options },
          { quoted },
        );
        return buffer;
      };

      const sendVideoAsSticker = async (
        laura,
        jid,
        path,
        quoted,
        options = {},
      ) => {
        let buff = Buffer.isBuffer(path)
          ? path
          : /^data:.*?\/.*?;base64,/i.test(path)
            ? Buffer.from(path.split`,`[1], "base64")
            : /^https?:\/\//.test(path)
              ? await await getBuffer(path)
              : fs.existsSync(path)
                ? fs.readFileSync(path)
                : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
          buffer = await writeExifVid(buff, options);
        } else {
          buffer = await videoToWebp(buff);
        }

        await Misax.sendMessage(
          jid,
          { sticker: { url: buffer }, ...options },
          { quoted },
        );
        return buffer;
      };

      const sendImageAsSticker2 = async (
        laura,
        jid,
        path,
        quoted,
        options = {},
      ) => {
        let buff = Buffer.isBuffer(path)
          ? path
          : /^data:.*?\/.*?;base64,/i.test(path)
            ? Buffer.from(path.split`,`[1], "base64")
            : /^https?:\/\//.test(path)
              ? await await getBuffer(path)
              : fs.existsSync(path)
                ? fs.readFileSync(path)
                : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
          buffer = await writeExifImg2(buff, options);
        } else {
          buffer = await imageToWebp2(buff);
        }

        await Misax.sendMessage(
          jid,
          { sticker: { url: buffer }, ...options },
          { quoted },
        );
        return buffer;
      };

      const sendVideoAsSticker2 = async (
        laura,
        jid,
        path,
        quoted,
        options = {},
      ) => {
        let buff = Buffer.isBuffer(path)
          ? path
          : /^data:.*?\/.*?;base64,/i.test(path)
            ? Buffer.from(path.split`,`[1], "base64")
            : /^https?:\/\//.test(path)
              ? await await getBuffer(path)
              : fs.existsSync(path)
                ? fs.readFileSync(path)
                : Buffer.alloc(0);
        let buffer;
        if (options && (options.packname || options.author)) {
          buffer = await writeExifVid2(buff, options);
        } else {
          buffer = await videoToWebp2(buff);
        }

        await Misax.sendMessage(
          jid,
          { sticker: { url: buffer }, ...options },
          { quoted },
        );
        return buffer;
      };

      //💜 isso e uma função nescessaria para o comando gerar nick
      function ANT_LTR_MD_EMJ(text) {
        const emojiRegex = /\p{Extended_Pictographic}/gu; // detecta emojis
        const unicodeRegex = /[^\x00-\x7F]/; // detecta letras modificadas (Unicode)
        return emojiRegex.test(text) || unicodeRegex.test(text);
      }
      //fim

      //💜 DELETA ARQUIVO(O NOME JÁ DIZ KKK) 💜
      async function DLT_FL(file) {
        try {
          fs.unlinkSync(file);
        } catch (error) {}
      }
      //💜 GRUPOS   💜
      const pastinhaDosGrupos = "./MISA-BANKER/grupos/ativos/";
      if (!fs.existsSync(pastinhaDosGrupos)) {
        fs.mkdirSync(pastinhaDosGrupos, { recursive: true });
      }

      const PastaDeGrupos = `${pastinhaDosGrupos}${from}.json`;
      if (isGroup && !fs.existsSync(PastaDeGrupos)) {
        var datea = [
          {
            name: groupName,
            antilink: false,
            bemVindo: [
              {
                ativo: false,
                foto: "LINK",
                saiu: "Até mais 👋 %numero%",
                entrou: "Seja bem vindo(a) %numero%",
              },
            ],
          },
        ];
        fs.writeFileSync(PastaDeGrupos, JSON.stringify(datea, null, 2) + "\n");
      }

      const ArquivosDosGrupos =
        isGroup && fs.existsSync(PastaDeGrupos)
          ? JSON.parse(fs.readFileSync(PastaDeGrupos))
          : undefined;

      function ModificaGrupo(index) {
        fs.writeFileSync(PastaDeGrupos, JSON.stringify(index, null, 2) + "\n");
      }
      function setNes(index) {
        fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + "\n");
      }

      ////💜 CONSTS GRUPOS 💜
      const isAntiLink = isGroup ? ArquivosDosGrupos[0].antilink : undefined;
      const BemVindoAcao = isGroup
        ? ArquivosDosGrupos[0].bemVindo[0]
        : undefined;
      const isBemVindo = isGroup
        ? ArquivosDosGrupos[0].bemVindo[0].ativo
        : undefined;
      const isJogos = isGroup ? ArquivosDosGrupos[0].joguinhos : undefined;
      //💜 FUNÇÕES GRUPOS💜

      if (isAntiLink) {
        const UrlLinks = ["https://", "wa.me", "http://"];
        for (let link of UrlLinks) {
          if (content.includes(link)) {
            enviar(`Links não são permitidos aqui, toma um ban sinistro kkk`);
            await Misax.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
            await esperar(1000);
            await clara.groupParticipantsUpdate(from, [sender], "remove");
          }
        }
      }

      // 💜 system rpg 💜

      let sabrpg = [];
      let autorpg = [];

      try {
        sabrpg = JSON.parse(
          fs.readFileSync(
            "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
            "utf-8",
          ),
        );
      } catch {
        sabrpg = [];
      }

      try {
        autorpg = JSON.parse(
          fs.readFileSync(
            "./MISA-BANKER/usuarios/misarpg/autorpg.json",
            "utf-8",
          ),
        );
      } catch {
        autorpg = [];
      }

      const idx = autorpg.findIndex((i) => i.id === from);
      const isSabCityOFF = idx === -1 || autorpg[idx]?.rpg === true;
      //fim ne

      // isso e pro bot on of e tals
      var {
        antipv,
        antipv2,
        antipv3,
        visualizarmsg,
        numero_dono1,
        numero_dono2,
        numero_dono3,
        numero_dono4,
        numero_dono5,
        numero_dono6,
        numero_dono7,
        numero_dono8,
        numero_dono9,
        numero_dono10,
        msgantipv1,
        msgantipv2,
        API_KEY_INVERTEXTO,
      } = require("./dono/nescessario.json");
      // fim

      //=================> Funções de Grupo 🥋
      const nescessario = require("./dono/nescessario.json");

      const dirGroup = `./MISA-BANKER/grupos/activation_gp/${from}.json`;

      const nescj = "./dono/nescessario.json";

      if (isGroup && !fs.existsSync(dirGroup)) {
        var data = [
          {
            name: groupName,
            groupId: from,
            x9: false,
            antiimg: false,
            antivideo: false,
            antiaudio: false,
            antisticker: false,
            antidoc: false,
            antictt: false,
            antiloc: false,
            antilinkgp: false,
            antilinkhard: false,
            antifake: false,
            antiporn: false,
            Odelete: false,
            antispam: false,
            antinotas: false,
            anticatalogo: false,
            visuUnica: false,
            registrarFIGUS: false,
            soadm: false,
            listanegra: [],
            advertir: [],
            prefixos: [`#`],
            advertir2: [],
            legenda_estrangeiro: "0",
            legenda_documento: "0",
            legenda_video: "0",
            legenda_imagem: "0",
            multiprefix: true,
            forca_ofc: [
              {
                acertos: 0,
                erros: 0,
                palavra: [],
                escreveu: [],
                palavra_ofc: 0,
                dica: 0,
                tema: 0,
              },
            ],
            ausentes: [],
            forca_inc: false,
            antipalavrao: {
              active: false,
              palavras: [],
            },
            limitec: {
              active: false,
              quantidade: null,
            },
            wellcome: [
              {
                bemvindo1: false,
                legendabv:
                  "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
                legendasaiu: "#numerodele# – Saiu do grupo: #nomedogp#",
              },
              {
                bemvindo2: false,
                legendabv:
                  "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
                legendasaiu: "#numerodele# – Saiu do grupo: #nomedogp#",
              },
            ],
            simi1: false,
            simi2: false,
            autosticker: false,
            autoresposta: false,
            jogos: false,
            level: false,
            bangp: false,
            aluguel: false,
          },
        ];
        fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + "\n");
      }

      const dataGp = isGroup
        ? JSON.parse(fs.readFileSync(dirGroup))
        : undefined;

      var DFNMULTIP = `./MISA-BANKER/func/prefixo/multip_${from}.json`;

      function setGp(index) {
        fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + "\n");
      }

      function setNes(index) {
        fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + "\n");
      }
      // fim

      // FUCOES DO BOT QUI
      const isBanchat = isGroup ? dataGp[0].bangp : false;
      const So_Adm = isGroup ? dataGp[0].soadm : false;
      const isBotoff = nescessario.botoff;
      const isAntiPv = nescessario.antipv;
      const isAutofigu = isGroup ? dataGp[0].autosticker : false;
      const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined;
      const IS_DELETE = nescessario.Odelete;

      // ABAIXO FICAS AS FUNÇÕES DE ANTI PV, AUTO_STICKER ETC.

      /* ANTIPV - Este anti pv bloqueia aqueles que encaminham mensagem no pv do bot.. */
      var USUARIOS_BLOQ = [];
      if (isAntiPv && !USUARIOS_BLOQ.includes(sender)) {
        if (!isGroup && !isCreator && !isvip) {
          await sleep(2500);
          reply(msgantipv1.replace("#nome#", pushname));
          setTimeout(async () => {
            client.updateBlockStatus(sender, "block");
          }, 2000);
        }
        USUARIOS_BLOQ.push(sender);
      }
      //fum

      if (isAutofigu && isGroup) {
        async function autofiguf() {
          setTimeout(async () => {
            if (
              budy.includes(`${prefix}sticker`) ||
              budy.includes(`${prefix}s`) ||
              budy.includes(`${prefix}stk`) ||
              budy.includes(`${prefix}st`) ||
              budy.includes(`${prefix}fsticker`) ||
              budy.includes(`${prefix}f`) ||
              budy.includes(`${prefix}fstiker`)
            )
              return;

            if (type == "imageMessage") {
              var pack = `↧ [👑] » Criador (a) da Figurinha:\n• ↳ ${pushname} owner\n—\n↧ [🩵] » Visite nosso Instagram:\n• ↳ instagram.com/gebezkz`;
              /*var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n${NickDono}`*/
              owgi = await getFileBuffer(info.message.imageMessage, "image");
              let encmediaa = await sendImageAsSticker2(
                Misax,
                from,
                owgi,
                seloNubank,
                { packname: pack },
              );
              DLT_FL(encmediaa);
            }

            if (type == "videoMessage") {
              if (isMedia && info.message.videoMessage.seconds < 10) {
                var pack = `↧ [👑] » Criador (a) da Figurinha:\n• ↳ ${pushname} owner\n—\n↧ [🩵] » Visite nosso Instagram:\n• ↳ instagram.com/gebezkz`;
                /*var author2 = `⚒${pushname}\n⚒${NomeDoBot}\n⚒${NickDono}`*/
                owgi = await getFileBuffer(info.message.videoMessage, "video");
                let encmedia = await sendVideoAsSticker2(
                  conn,
                  from,
                  owgi,
                  info,
                  { packname: pack },
                );
                DLT_FL(encmedia);
              }
            }
          }, 1000);
        }
        autofiguf().catch((e) => {
          console.log(e);
        });
      }

      //======(ANTI-STICKER)========\\
      if (
        isAntiSticker &&
        !isGroupAdmins &&
        isBotGroupAdmins &&
        type == "stickerMessage"
      ) {
        if (info.key.fromMe) return;
        Misax.sendMessage(
          from,
          { text: "*mensagem proibida detectada, banindo...*" },
          { quoted: selo },
        );
        if (IS_DELETE) {
          setTimeout(() => {
            Misax.sendMessage(from, {
              delete: {
                remoteJid: from,
                fromMe: false,
                id: info.key.id,
                participant: sender,
              },
            });
          }, 500);
        }
        if (!JSON.stringify(groupMembers).includes(sender)) return;
        Misax.groupParticipantsUpdate(from, [sender], "remove");
      }

      //💜 Consts isQuoted 💜
      const isImage = type == "imageMessage";
      const isVideo = type == "videoMessage";
      const isAudio = type == "audioMessage";
      const isSticker = type == "stickerMessage";
      const isContact = type == "contactMessage";
      const isLocation = type == "locationMessage";
      const isProduct = type == "productMessage";
      const isMedia = ((
        type === "imageMessage" ||
        type === "videoMessage" ||
        type === "audioMessage"
      ).typeMessage = body.substr(0, 50).replace(/\n/g, ""));
      if (isImage) typeMessage = "Image";
      else if (isVideo) typeMessage = "Video";
      else if (isAudio) typeMessage = "Audio";
      else if (isSticker) typeMessage = "Sticker";
      else if (isContact) typeMessage = "Contact";
      else if (isLocation) typeMessage = "Location";
      else if (isProduct) typeMessage = "Product";
      const isQuotedMsg =
        type === "extendedTextMessage" && content.includes("textMessage");
      const isQuotedImage =
        type === "extendedTextMessage" && content.includes("imageMessage");
      const isQuotedVideo =
        type === "extendedTextMessage" && content.includes("videoMessage");
      const isQuotedDocument =
        type === "extendedTextMessage" && content.includes("documentMessage");
      const isQuotedAudio =
        type === "extendedTextMessage" && content.includes("audioMessage");
      const isQuotedSticker =
        type === "extendedTextMessage" && content.includes("stickerMessage");
      const isQuotedContact =
        type === "extendedTextMessage" && content.includes("contactMessage");
      const isQuotedLocation =
        type === "extendedTextMessage" && content.includes("locationMessage");
      const isQuotedProduct =
        type === "extendedTextMessage" && content.includes("productMessage");
      const isQuotedDocW =
        type === "extendedTextMessage" &&
        content.includes("documentWithCaptionMessage");
      //fim

      /// 💜 mencionar em.uma imagem 💜

      const mencionarIMG = (teks = "", Url, ms) => {
        memberr = [];
        vy = teks.includes("\n") ? teks.split("\n") : [teks];
        for (vz of vy) {
          for (zn of vz.split(" ")) {
            if (zn.includes("@"))
              memberr.push(parseInt(zn.split("@")[1]) + "@s.whatsapp.net");
          }
        }
        Misax.sendMessage(
          from,
          { image: { url: Url }, caption: teks.trim(), mentions: memberr },
          { quoted: seloNubank },
        );
      };
      // 💜 fimm 💜

      //💜 sistema rpg basico 💜

      const minerar = JSON.parse(
        fs.readFileSync("./MISA-BANKER/usuarios/misarpg/minerar.json"),
      );

      const {
        criarFamilia,
        adicionarFamilia,
        sairFamilia,
        verFamilia,
        verTodasFamilias,
        isUserInFamily,
        loadFamilias,
        saveFamilias,
      } = require("./MISA-BANKER/usuarios/misarpg/familias.js");

      const path = require("path");

      const rpgPath = path.resolve(
        "./MISA-BANKER/usuarios/misarpg/usuarios.json",
      );
      const roubosrpg = JSON.parse(
        fs.readFileSync("./MISA-BANKER/usuarios/misarpg/roubosrpg.json"),
      );

      // Garante que o arquivo exista e leia os dados
      function lerRPG() {
        try {
          if (!fs.existsSync(rpgPath)) {
            fs.writeFileSync(rpgPath, JSON.stringify({}, null, 2));
          }
          return JSON.parse(fs.readFileSync(rpgPath));
        } catch (err) {
          console.error("Erro ao ler dados RPG:", err);
          return {};
        }
      }

      // Salva os dados no arquivo
      function salvarRPG(dados) {
        if (!dados || typeof dados !== "object") return;
        try {
          fs.writeFileSync(rpgPath, JSON.stringify(dados, null, 2));
        } catch (err) {
          console.error("Erro ao salvar dados RPG:", err);
        }
      }

      // Cria ou retorna o jogador a partir do objeto de dados já carregado
      function getJogador(id, dados) {
        dados = dados || lerRPG(); // adiciona esta linha
        if (!dados[id]) {
          dados[id] = {
            nome: "Aventureiro",
            nivel: 1,
            xp: 0,
            hp: 100,
            maxHp: 100,
            ataque: 10,
            ouro: 50,
            plantas: { rosa: 0, girassol: 0 },
            animais: {
              galinha: { qtd: 0, ovos: 0, filhotes: 0 },
              vaca: { qtd: 0, filhotes: 0 },
            },
          };
        }
        return dados[id];
      }

      // Atualiza o jogador com segurança e persistência
      function atualizarJogador(id, updateFunc) {
        const dados = lerRPG();
        const jogador = getJogador(id, dados);
        updateFunc(jogador);
        dados[id] = jogador;
        salvarRPG(dados);
      }
      //fim

      //========================================\\

      //BOT OFF E BANGP
      if (isGroup && isCmd && isBanchat && !isCreator) return;

      if (isGroup && isCmd && So_Adm && !isCreator && !isGroupAdmins) return;

      if (isBotoff && !isCreator) return;

      //=======================================\\

      //💜 LOG DE MENSAGEM 💜
      if (!isCmd && !isGroup && !info.key.fromMe)
        console.log(
          color("\n┏━━━━━💜°❀•°:｡💜｡:°•❀°💜━━━━━┓", "lightpink"),
          "\n",
          color(" 💜 𝙼𝙴𝙽𝚂𝙰𝙶𝙴𝙼 𝙽𝙾 𝙿𝚅 💜", "magenta"),
          "\n",
          color(" 💜 𝑵𝒖́𝒎𝒆𝒓𝒐:", "lightpink"),
          color(sender.split("@")[0], "red"),
          "\n",
          color(" 💜 𝑼𝒔𝒖𝒂́𝒓𝒊𝒐:", "lightpink"),
          color(pushname, "cyan"),
          "\n",
          color(" 💜 𝑯𝒐𝒓𝒂́𝒓𝒊𝒐:", "lightpink"),
          color(hora, "cyan"),
          "\n",
          color(" 💜 𝑴𝒆𝒏𝒔𝒂𝒈𝒆𝒎:", "lightpink"),
          color(body, "cyan"),
          "\n",
          color(" 💜 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝𝐞:", "lightpink"),
          color(`${latensi.toFixed(4)} s`, "cyan"),
          "\n",
          color("┗━━━━━💜°❀•°:｡💜｡:°•❀°💜━━━━━┛", "lightpink"),
          "\n",
        );

      if (!isCmd && isGroup && !info.key.fromMe)
        console.log(
          color("\n┏━━━━━💜°❀•°:｡💜｡:°•❀°💜━━━━━┓", "lightblue"),
          "\n",
          color(" 💜 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚖 𝚗𝚘 𝚐𝚛𝚞𝚙𝚘 💜", "cyan"),
          "\n",
          color(" 💜 𝑮𝒓𝒖𝒑𝒐:", "lightblue"),
          color(groupName, "cyan"),
          "\n",
          color(" 💜 𝑵𝒖́𝒎𝒆𝒓𝒐:", "lightblue"),
          color(sender.split("@")[0], "red"),
          "\n",
          color(" 💜 𝑼𝒔𝒖𝒂́𝒓𝒊𝒐:", "lightblue"),
          color(pushname, "cyan"),
          "\n",
          color(" 💜 𝑯𝒐𝒓𝒂́𝒓𝒊𝒐:", "lightblue"),
          color(hora, "cyan"),
          "\n",
          color(" 💜 𝑴𝒆𝒏𝒔𝒂𝒈𝒆𝒎:", "lightblue"),
          color(body, "cyan"),
          "\n",
          color(" 💜 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝𝐞:", "lightblue"),
          color(`${latensi.toFixed(4)} s`, "cyan"),
          "\n",
          color("┗━━━━━💜°❀•°:｡💜｡:°•❀°💜━━━━━┛", "lightblue"),
          "\n",
        );

      if (!isGroup && isCmd)
        console.log(
          color("\n┏━━━━━💜°❀•°:｡💜｡:°•❀°💜━━━━━┓", "lightpink"),
          "\n",
          color(" 💜 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙽𝙾 𝙿𝚅 💜", "magenta"),
          "\n",
          color(" 💜 𝑼𝒔𝒖𝒂́𝒓𝒊𝒐:", "lightpink"),
          color(pushname, "cyan"),
          "\n",
          color(" 💜 𝑵𝒖́𝒎𝒆𝒓𝒐:", "lightpink"),
          color(sender.split("@")[0], "red"),
          "\n",
          color(" 💜 𝑪𝒐𝒎𝒂𝒏𝒅𝒐:", "lightpink"),
          color(comando || "nenhum", "cyan"),
          "\n",
          color(" 💜 𝑯𝒐𝒓𝒂́𝒓𝒊𝒐:", "lightpink"),
          color(hora, "cyan"),
          "\n",
          color(" 💜 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝𝐞:", "lightpink"),
          color(`${latensi.toFixed(4)} s`, "cyan"),
          "\n",
          color("┗━━━━━💜°❀•°:｡💜｡:°•❀°💜━━━━━┛", "lightpink"),
          "\n",
        );

      if (isCmd && isGroup)
        console.log(
          color("\n┏━━━━━💜°❀•°:｡💜｡:°•❀°💜━━━━━┓", "lightblue"),
          "\n",
          color(" 💜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘 𝚗𝚘 𝚐𝚛𝚞𝚙𝚘 💜", "cyan"),
          "\n",
          color(" 💜 𝑮𝒓𝒖𝒑𝒐:", "lightblue"),
          color(groupName, "red"),
          "\n",
          color(" 💜 𝑵𝒖́𝒎𝒆𝒓𝒐:", "lightblue"),
          color(sender.split("@")[0], "red"),
          "\n",
          color(" 💜 𝑼𝒔𝒖𝒂́𝒓𝒊𝒐:", "lightblue"),
          color(pushname, "gold"),
          "\n",
          color(" 💜 𝑪𝒐𝒎𝒂𝒏𝒅𝒐:", "lightblue"),
          color(comando || "nenhum", "gold"),
          "\n",
          color(" 💜 𝑯𝒐𝒓𝒂́𝒓𝒊𝒐:", "lightblue"),
          color(hora, "gold"),
          "\n",
          color(" 💜 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝𝐞:", "lightblue"),
          color(`${latensi.toFixed(4)} s`, "cyan"),
          "\n",
          color("┗━━━━━💜°❀•°:｡💜｡:°•❀°💜━━━━━┛", "lightblue"),
          "\n",
        );

      // 💜 img do usuário 💜
      async function ppimg() {
        try {
          slaw = await clara.profilePictureUrl(
            `${sender.split("@")[0]}@c.us`,
            "image",
          );
          shortpc = await axios.get(
            `https://tinyurl.com/api-create.php?url=${slaw}`,
          );
          return shortpc.data;
        } catch (e) {
          return "https://telegra.ph/file/9c472f0ed2499de52e2f5.jpg";
        }
      }

      async function carregamento(oq) {
        var carre = [
          "💌 0%",
          "💓 20%",
          "💞 40%",
          "💖 60%",
          "❤️‍🩹 90%",
          "💗 100%",
          `${oq}`,
        ];
        let { key } = await Misax.sendMessage(
          from,
          { text: botName },
          { quoted: seloNubank },
        );
        for (let i = 0; i < carre.length; i++) {
          await Misax.sendMessage(
            from,
            { text: carre[i], edit: key },
            { quoted: seloNubank },
          );
        }
      }

      // 💜IMAGENS 💜

      const {
        fundo1,
        fundo2,
        imgnazista,
        imggay,
        imgcorno,
        imggostosa,
        imggostoso,
        imgfeio,
        imgvesgo,
        imgbebado,
        imggado,
        matarcmd,
        deathcmd,
        beijocmd,
        chutecmd,
        tapacmd,
        rnkgay,
        rnkgado,
        cmdmenu,
        rnkcorno,
        rnkgostoso,
        rnkgostosa,
        rnknazista,
        rnkotaku,
        rnkpau,
        suruba,
        minado_bomb,
        thumbnail,
        imgsigma,
        imgbeta,
        imgbaiano,
        imgbaiana,
        imgcarioca,
        imglouco,
        imglouca,
        imgsafada,
        imgsafado,
        imgmacaco,
        imgmacaca,
        imgputa,
        rnksigma,
        rnkbeta,
        rnkbaiano,
        rnkbaiana,
        rnkcarioca,
        rnklouco,
        rnklouca,
        rnksafada,
        rnksafado,
        rnkmacaco,
        rnkmacaca,
        errocmd,
        rnkputa,
      } = require("./MISA-BANKER/links_img.json");
      //💜 FIM 💜
      
      var command = comando
      switch (cmd) {
        // 💜 ABAIXO FICA OS MENUS 💜
        case "menu":
          reagir(from, "💖");
          await Misax.sendMessage(
            from,
            {
              image: { url: fotomenu },
              caption: menu(
                donoName,
                botName,
                prefixo,
                timed,
                data,
                hora,
                totalCmd,
                moji,
                emoji,
                pushname,
              ),
            },
            { quoted: seloNubank },
          );
          break;

        case "menulogos":
          reagir(from, "💞");
          await Misax.sendMessage(
            from,
            {
              image: { url: fotomenu },
              caption: menuLogos(
                donoName,
                botName,
                prefixo,
                timed,
                data,
                hora,
                totalCmd,
                moji,
                emoji,
                pushname,
              ),
            },
            { quoted: seloNubank },
          );
          break;

        case "menuadm":
          if (!isGroup) return enviar(msg.grupo);
          if (!isGroupAdmins && !isDono) return enviar(msg.adm);
          reagir(from, "💓");
          enviar(
            "𝙲𝚊𝚕𝚖𝚊, 𝙲𝚊𝚕𝚖𝚊 𝚚𝚞𝚎 𝚟𝚘𝚌𝚎 𝚎 𝚒𝚖𝚙𝚘𝚛𝚝𝚊𝚗𝚝𝚎, 𝚝𝚘𝚖𝚎 𝚎𝚜𝚜𝚎 𝚖𝚎𝚗𝚞 𝚊𝚚𝚞𝚒 𝚑𝚎𝚑𝚎",
          );
          await Misax.sendMessage(
            from,
            {
              image: { url: fotomenu },
              caption: menuAdm(
                donoName,
                botName,
                prefixo,
                timed,
                data,
                hora,
                totalCmd,
                moji,
                emoji,
                pushname,
              ),
            },
            { quoted: seloNubank },
          );
          break;

        case "menudono":
          if (!isDono) return enviar(msg.dono);
          reagir(from, "❤️‍🩹");
          enviar(`𝙼𝚎𝚗𝚞 𝚍𝚘𝚗𝚘 𝚊 𝚌𝚊𝚖𝚒𝚗𝚑𝚘𝚘𝚘𝚘𝚘 💘`);
          await Misax.sendMessage(
            from,
            {
              image: { url: fotomenu },
              caption: menuDono(
                donoName,
                botName,
                prefixo,
                timed,
                data,
                hora,
                totalCmd,
                moji,
                emoji,
                pushname,
              ),
            },
            { quoted: seloNubank },
          );
          break;

        case "menuvip":
          if (!isvip) return enviar("so usuarios vip fia (o)");
          reagir(from, "❣️");
          await Misax.sendMessage(
            from,
            {
              image: { url: fotomenu },
              caption: menuVip(
                donoName,
                botName,
                prefixo,
                timed,
                data,
                hora,
                totalCmd,
                moji,
                emoji,
                pushname,
              ),
            },
            { quoted: seloNubank },
          );
          break;

        case "menurpg":
          if (!isSabCityOFF)
            return enviar("modo rpg ativo? nao ne, ative logu");
          reagir(from, "💝");
          await Misax.sendMessage(
            from,
            {
              image: { url: fotomenu },
              caption: menuRpg(
                donoName,
                botName,
                prefixo,
                timed,
                data,
                hora,
                totalCmd,
                moji,
                emoji,
                pushname,
              ),
            },
            { quoted: seloNubank },
          );
          break;

        case "menubrincadeiras":
        case "menubrincadeiras":
        case "brincadeiras":
        case "brincadeira":
          if (!isJogos) return enviar("modo brincadeiras precisa ta ativo");
          reagir(from, "👍🏿");
          await Misax.sendMessage(
            from,
            {
              image: { url: fotomenu },
              caption: menubrincadeiras(
                donoName,
                botName,
                prefixo,
                timed,
                data,
                hora,
                totalCmd,
                moji,
                emoji,
                pushname,
              ),
            },
            { quoted: seloNubank },
          );
          break;
        // 💜 FIM DOS MENUS 💜

        // 💜 EM BAIXO OS COMANDOS ALEATÓRIOS 💜 TOTALXE COMANDOS 14

        case "metadinha":
          {
            reagir(from, "😍");
            try {
              ABC = await fetchJson(
                `https://zero-two-apis.com.br/random/metadinha?apikey=Pato444`,
              );
              Misax.sendMessage(
                from,
                { image: { url: ABC.masculina }, caption: `♂️ *HOMEM* ♂️` },
                { quoted: seloNubank },
              );
              Misax.sendMessage(
                from,
                { image: { url: ABC.feminina }, caption: `♀️ *MULHER* ♀️` },
                { quoted: seloNubank },
              );
            } catch (e) {
              reagir(from, "❌️");
            }
          }
          break;

        case "instamp3":
          if (!q) return reply("Adicione o link de Instagram para baixar");
          if (!q.includes("instagram"))
            return reply("Por favor, adicione um link do Instagram");
          reply("🖤🔪 AGUARDE AGORA 🔪🖤");
          await Misax.sendMessage(
            from,
            {
              audio: {
                url: `https://api.nexfuture.com.br/api/downloads/instagram/mp3?url=${q}`,
              },
              mimetype: "audio/mpeg",
              ptt: true,
            },
            { quoted: seloNubank },
          ).catch((e) => {
            reply(`${e}`);
            reagir(from, "🔪");
          });
          break;

        case "attp1":
        case "attp2":
        case "attp3":
        case "attp4":
        case "attp5":
          try {
            if (args.length < 1)
              return reply(`_Coloque o texto _\n\n*Exemplo ${prefix}attp1 Sad`);
            url = await getBuffer(
              `https://hexacode-apis.space/sticker/${comando}?texto=${q}&apitoken=hexa-key`,
            );
            await Misax.sendMessage(
              from,
              { sticker: url },
              { quoted: seloNubank },
            );
          } catch (e) {
            console.log(e);
            reply("ERROR");
          }
          break;

        case "avaliar":
        case "avaliação":
          {
            if (!q)
              return reply(
                `oie pushname digite assim ${prefix}avaliar nota 10`,
              );

            const nota = parseInt(q);
            if (isNaN(nota) || nota < 0 || nota > 10)
              return reply("Por favor, envie uma nota válida de 0 a 10.");

            let mensagem;
            if (nota < 5) {
              mensagem = `😢 O usuário @${sender.split("@")[0]} deu uma nota baixa: *${nota}*\nTalvez algo não tenha agradado... vamos melhorar!`;
            } else {
              mensagem = `🎉 O usuário @${sender.split("@")[0]} avaliou com nota *${nota}*!\nParabéns, continua assim Misax-Bot! 🦋`;
            }

            reply("🦋 Obrigada pela sua avaliação!");

            let templateMessage = {
              image: { url: "./MISA-BANKER/imagem/menu.jpg" },
              caption: mensagem,
              footer: "Misax-Bot",
            };

            Misax.sendMessage("558398164308@s.whatsapp.net", templateMessage);
          }
          break; //by gebe modz



        case "pegar":
          if (!args[0])
            return reply(
              `diga o que quer pegar do usuario, exemplo: ${prefixo + comando} mão`,
            );
          let itemPegado = args.join(" ");
          reply(`voce pegou no: ${itemPegado}\nDo: ${pushname}\n😏`);
          break;

        case "linknunber":
          if (!args[0])
            return reply(
              `informe seu numero, exemplo: ${prefix + comando} 559999898`,
            );
          let numberUser = args.join(" ");
          reply(`aqui esta seu numero em forma de link: wa.me/+${numberUser}`);
          break;

        case "report": //by gebe modz
        case "bug":
          if (!q)
            return reply(
              `*oie ${pushname} infelizmentevoce digitou o comando errado tente ${prefix}bug menu*`,
            );
          reply(
            `*_Obrigada por detectar esse erro, ja caminhei o bug para o meu criador para ele ajeitar imediatamente 🦋*_`,
          );
          let templateMesssage = {
            image: {
              url: "./MISA-BANKER/imagem/menu.jpg",
              quoted: seloNubank,
            },
            caption: `☕️ *ola mestre desculpe lhe encomondar mas detectaram um erro no meu sistema* ☕️\naqui esta o numero dele 🪷: @${sender.split("@")[0]},\nesse foi o comando que esta com falha 💬:${q}`,
            footer: "menu.jpg",
          };
          Misax.sendMessage(`558398164308@s.whatsapp.net`, templateMesssage);
          break;

        case "novocmd": //by gebe modz
          if (!q)
            return reply(`oie ${pushname} digite assim ${prefix}novocmd filme`);
          reply(
            `*_Obrigada pela sugestão de comando estou grata, espero que eu melhore cada vez mais 🥺🦋_*`,
          );
          const qp = args.join(" ");
          let templateMessage = {
            image: {
              url: "./MISA-BANKER/imagem/menu.jpg",
              quoted: seloNubank,
            },
            caption: `*_OIIEE MESTRE VIM TRAZER UMA NOTICIA MUITO BOA, PENSARAM EM UM NOVO COMANDO PRA UM >.<_*\nAqui esta o número dele 🦋:: @${sender.split("@")[0]},\n> O COMANDO QUE ELE PENSOU FOI ESSE:: ${q}`,
            footer: "menu.jpg",
          };
          Misax.sendMessage(`558398164308@s.whatsapp.net`, templateMessage);
          break;

        case "fala": {
          if (!q)
            return reply(
              `📢 Escreva o texto que quer transformar em áudio!\n\n📌 Uso: ${prefix}fala Olá misa`,
            );

          const audioUrl = `https://anyapi.com.br/api/ferramentas/googlevoz?text=${encodeURIComponent(q)}&apikey=YgzAumSq`;

          try {
            await Misax.sendMessage(
              from,
              {
                audio: { url: audioUrl },
                mimetype: "audio/mp4",
                ptt: true,
              },
              { quoted: seloNubank },
            );
          } catch (e) {
            console.error(e);
            reply(
              "❌ Ocorreu um erro ao gerar o áudio. Tente novamente mais tarde.",
            );
          }

          break; //by gebe modz
        }

        case "series":
          try {
            if (!q) return reply("cade o nome da serie?");
            seris = await fetchJson(
              `https://api.nexfuture.com.br/api/pesquisas/series?query=${encodeURIComponent(q)}`,
            );

            let serr = `
📽 ɴᴏᴍᴇ: ${seris.resultado.titulo}
💨 ɴᴏᴍᴇ ᴏʀɢ: ${seris.resultado.titulo_original}
📂 ʟᴀɴᴄ‌ᴀᴅᴏ: ${seris.resultado.lancamento}
🌟 ᴀᴠᴀʟɪᴀᴄ‌ᴀ‌ᴏ: ${seris.resultado.avaliacao}
🀄 ɪᴅɪᴏᴍᴀ ᴏʀɢ: ${seris.resultado.idioma_original}

📚 ᴅᴇsᴄʀɪᴄ‌ᴀ‌ᴏ: ${seris.resultado.sinopse}
`;

            await Misax.sendMessage(
              from,
              { image: { url: seris.resultado.imagem }, caption: serr },
              { quoted: seloNubank },
            );
          } catch (e) {
            console.log(e);
            return reply("Ocorreu um erro, tente novamente mais tarde.");
          }
          break;

        case "misa-responde":
          try {
            if (!q) return reply("💜 CADE A PERGUNTA? 💜");
            let { key } = await Misax.sendMessage(
              from,
              { text: `💜 ESPERA AGORA AMORZIN  💜` },
              { quoted: seloNubank },
            );
            let urlg = `https://api.nexfuture.com.br/api/inteligencias/gemini/pro?query=${encodeURIComponent(q)}`;
            let gemipro = await fetchJson(urlg);
            await Misax.sendMessage(from, {
              text: gemipro.resposta,
              edit: key,
            });
          } catch (error) {
            console.log(error);
            return reply("Deu um pequeno erro, tente novamente mais tarde.");
          }
          break;

        case "filmes":
          try {
            if (!q) return reply("cade o nome do filme?");
            filmes = await fetchJson(
              `https://api.nexfuture.com.br/api/pesquisas/filmes?query=${encodeURIComponent(q)}`,
            );

            let film = `
🏷️ ᴛɪ‌ᴛᴜʟᴏ: ${filmes.resultado.titulo}
👾 ᴛɪ‌ᴛᴜʟᴏ ᴏʀɢ: ${filmes.resultado.titulo_original}
📤 ʟᴀɴᴄ‌ᴀᴍᴇɴᴛᴏ: ${filmes.resultado.lancamento}
🌟 ᴀᴠᴀʟɪᴀᴄ‌ᴀ‌ᴏ: ${filmes.resultado.avaliacao}
🗳️ ᴠᴏᴛᴏs: ${filmes.resultado.votos}
🤴 ᴘᴏᴘᴜʟᴀʀɪᴅᴀᴅᴇ: ${filmes.resultado.popularidade}
🀄 ɪᴅɪᴏᴍᴀ ᴏʀɢ: ${filmes.resultado.idioma_original}
📽 ᴛʀᴀɪʟᴇʀ: ${filmes.resultado.trailer}

🗞 sɪɴᴏᴘsᴇ: ${filmes.resultado.sinopse}
`;

            await Misax.sendMessage(
              from,
              { image: { url: filmes.resultado.imagem }, caption: film },
              { quoted: seloNubank },
            );
          } catch (e) {
            console.log(e);
            return reply("Ocorreu um erro, tente novamente mais tarde.");
          }
          break;

        case "fakechat":
        case "fakemsg":
          if (!isGroup) return reply(msg.grupo);
          var [repplace, tarrget, bott] = q.split("|");
          var m_ =
            info.message.extendedTextMessage &&
            info.message.extendedTextMessage.contextInfo &&
            info.message.extendedTextMessage.contextInfo.mentionedJid
              ? info.message.extendedTextMessage.contextInfo.mentionedJid[0]
              : null;
          if (m_ && tarrget && bott) {
            Misax.sendMessage(
              from,
              { text: bott },
              {
                quoted: {
                  key: { fromMe: false, participant: m_ },
                  message: { conversation: tarrget },
                },
              },
            );
          } else {
            reply(
              `Crie mensagens fakes com qualquer uma pessoa! Explicando abaixo:\n—\n• Você precisaria mencionar a pessoa e adicionar a mensagem que ele supostamente iria enviar e que você responderia a seguinte mensagem, todos usando a *|* para separar o que foi pedido dito nesse textinho...\n• *Ex:* ${prefix + comando} @vitima|msg1|msg2`,
            );
          }
          break;

case 'play':
case 'tocar':
{
  if (!q) return reply("❌ | Envie o nome da música que deseja buscar!");

  let res = await fetch(`https://gebeofapi.speedhosting.cloud/api/download/playAudio?query=${encodeURIComponent(q)}&apikey=${API_KEY_MISA}`);
  let data = await res.json();

  if (data.status === false) return reply("❌ | Não foi possível encontrar esse áudio.");

  let audio = data.resultado?.LinkAudio;
  let nome = data.resultado?.Nome || 'Áudio';
  let thumb = data.resultado?.ThumbnailYoutube;

  await Misax.sendMessage(from, { image: { url: thumb }, caption: `🎵 *${nome}*` }, { quoted: info });

  await Misax.sendMessage(from, { audio: { url: audio }, mimetype: 'audio/mpeg' }, { quoted: info });

}
break;

case 'gerarlink2':
  try {
    const getMimetypeName = (mimetype) => {
      if (mimetype.includes('image')) return 'imagem.jpg';
      if (mimetype.includes('video')) return 'video.mp4';
      return 'arquivo.bin';
    };

    const getFileBuffer = async (message, type) => {
      if (!message) throw new Error('Mídia nula ou inválida.');
      const stream = await downloadContentFromMessage(message, type);
      let buffer = Buffer.from([]);
      for await (const chunk of stream) {
        buffer = Buffer.concat([buffer, chunk]);
      }
      return buffer;
    };

    const formatBytes = (bytes) => {
      if (bytes === 0) return '0 Bytes';
      const k = 1024;
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
      const i = Math.floor(Math.log(bytes) / Math.log(k));
      return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const uploadMisa = async (buffer, filename) => {
      const FormData = require('form-data');
      const form = new FormData();
      form.append('files[]', buffer, filename);

      const response = await axios.post('https://uguu.se/upload.php', form, {
        headers: form.getHeaders()
      });

      if (!response.data.files || response.data.files.length === 0) {
        throw new Error('Erro ao fazer upload');
      }

      const link = typeof response.data.files[0] === 'string'
        ? response.data.files[0]
        : String(response.data.files[0].url || response.data.files[0]);

      return {
        url: link,
        shortUrl: link,
        fileSize: formatBytes(buffer.length),
        filename
      };
    };

    const sendResultMessage = async (mediaInfo, uploadInfo) => {
      const caption = `*🗂️ Arquivo Enviado com Sucesso!*\n\n` +
        `📄 *Nome:* ${uploadInfo.filename}\n` +
        `📦 *Tamanho:* ${uploadInfo.fileSize}\n` +
        `🌐 *URL Completa:* ${String(uploadInfo.url)}\n` +
        `🔗 *URL Curta:* ${String(uploadInfo.shortUrl)}`;

      await Misax.sendMessage(from, {
        image: mediaInfo,
        caption
      }, { quoted: info });
    };

    // ============================
    // DETECÇÃO DE MÍDIA
    // ============================
    let media = null;
    let mimetype = '';
    let type = '';

    if (info.message?.imageMessage) {
      media = info.message.imageMessage;
      mimetype = media.mimetype;
      type = 'image';
    } else if (info.message?.videoMessage && info.message.videoMessage.seconds < 30) {
      media = info.message.videoMessage;
      mimetype = media.mimetype;
      type = 'video';
    } else if (info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.imageMessage) {
      media = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;
      mimetype = media.mimetype;
      type = 'image';
    } else if (info.message?.extendedTextMessage?.contextInfo?.quotedMessage?.videoMessage &&
               info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 60) {
      media = info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage;
      mimetype = media.mimetype;
      type = 'video';
    }

    if (!media || !mimetype) {
      return await reply(`❌ Envie ou responda uma *imagem* ou um *vídeo curto* com o comando *gerarlink2* para gerar o link de upload.`);
    }

    await reagir(from, "📤");

    const buffer = await getFileBuffer(media, type);
    const filename = getMimetypeName(mimetype);
    const result = await uploadMisa(buffer, filename);

    await sendResultMessage(buffer, result);

  } catch (error) {
    console.error(error);
    await reply("❌ Ocorreu um erro ao processar a mídia. Certifique-se de estar enviando ou respondendo corretamente.");
  }
  break;

        case "nick":
        case "gerarnick":
        case "fazernick":
        case "estilizar":
          try {
            //toshiruz dev
            nick = args.join(" ");
            if (!q)
              return reply(
                `Escreva um texto para eu estilizar.\n• *Exemplo:* ${prefix + commndo} toshiruzdev`,
              );
            if (ANT_LTR_MD_EMJ(q))
              return reply(
                "Não use letras modificadas ou emojis para criar o nick.",
              );
            const estilos = [
              (txt) => `『 ${txt.toUpperCase()} 』`,
              (txt) => `• ${txt.toLowerCase()} •`,
              (txt) => `[ ${txt} ]`,
              (txt) => `『★${txt}★』`,
              (txt) => `𓆩 ${txt} 𓆪`,
              (txt) => `꧁༒☬ ${txt} ☬༒꧂`,
              (txt) => `≪ ${txt} ≫`,
              (txt) => `『${txt.split("").join("・")}』`,
              (txt) => `⸻ ${txt} ⸻`,
              (txt) =>
                `${txt
                  .split("")
                  .map((l) => l + "͜")
                  .join("")}`,
            ];
            let txt = `• Estilos aplicados ao texto: *${nick}*\n–\n`;
            estilos.forEach((estilo, i) => {
              txt += `*${i + 1}.* ${estilo(nick)}\n–\n`;
            });
            reply(txt.trim());
          } catch (e) {
            console.log(e);
            reply(
              "Erro ao gerar as fontes modificadas ou estilizar seu texto.",
            );
          }
          break;

        case "calculadora":
        case "calcular":
        case "calc": //toshiruz dev
          if (!q)
            return reply("Digite uma expressão para calcular, exemplo: 5+5");
          try {
            let expressao = q
              .replace(/x/gi, "*")
              .replace(/÷/g, "/")
              .replace(/[^0-9\-+*/().]/g, "");
            let resultado = eval(expressao);
            if (resultado === undefined) return reply("Expressão inválida.");
            reply(`Resultado: ${resultado}`);
          } catch (err) {
            reply("Erro ao calcular. Verifique a expressão.");
          }
          break;

        case "atestado":
          {
            //By Xulinn
            reagir(from, "🤕");
            function gerarCPF() {
              let cpf = "";
              for (let i = 0; i < 9; i++) {
                cpf += Math.floor(Math.random() * 10);
              }
              return (
                cpf.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3") +
                "-" +
                Math.floor(Math.random() * 90 + 10)
              );
            }

            function gerarCRM() {
              return Math.floor(100000 + Math.random() * 900000);
            }

            const paciente = pushname || "Paciente";
            const cpf = gerarCPF();
            const crm = gerarCRM();
            const assinatura = botName || "botName";

            const dataHoje = new Date();
            const dia = String(dataHoje.getDate()).padStart(2, "0");
            const mes = String(dataHoje.getMonth() + 1).padStart(2, "0");
            const ano = dataHoje.getFullYear();
            const dataFormatada = `${dia}/${mes}/${ano}`;

            const mensagem = `
╭━━━━━━━❮◆❯━━━━━━━╮
        *ATESTADO MÉDICO*
╰━━━━━━━❮◆❯━━━━━━━╯

Atesto, para os devidos fins, que o(a) paciente *${paciente}*, CPF nº *${cpf}*, foi atendido(a) em consulta médica nesta data, apresentando quadro clínico compatível com *gripe (síndrome gripal)*, com sintomas como febre, dor no corpo, coriza e mal-estar geral.

*Recomendo afastamento de suas atividades habituais por 2 dias*, a contar de *${dataFormatada}*, para tratamento e recuperação, além de prevenção da disseminação da infecção.

───────────────
*Dr(a). ${assinatura}*
CRM: ${crm}
Assinatura: *${paciente}*
───────────────
`;

            reply(mensagem);
          }
          break; //By Xulinn & Sakamoto-Legacy

        case "estatistica": {
          try {
            const stats = {
              punhetas: Math.floor(Math.random() * 2000),
              sexo: Math.floor(Math.random() * 800),
              nudesRecebidos: Math.floor(Math.random() * 1000),
              nudesEnviados: Math.floor(Math.random() * 700),
              packsVistos: Math.floor(Math.random() * 1200),
              pornoVisto: Math.floor(Math.random() * 3000),
              gemidasOuvidas: Math.floor(Math.random() * 500),
              hentaiAssistido: Math.floor(Math.random() * 1500),
              gemidoTomado: Math.floor(Math.random() * 300),
              viradasNoLuv: Math.floor(Math.random() * 600),
              punhetaMental: Math.floor(Math.random() * 1000),
              roleNoturno: Math.floor(Math.random() * 400),
              travecoVisto: Math.floor(Math.random() * 200),
              punhetasNoBanho: Math.floor(Math.random() * 700),
              noitesSemDormir: Math.floor(Math.random() * 250),
            };

            const mensagem = `
╭──❰ 📊 𝗘𝗦𝗧𝗔𝗗𝗜́𝗦𝗧𝗜𝗖𝗔𝗦 +𝟭𝟴 ❱──╮
│😈 *Punhetas batidas:* ${stats.punhetas}
│🍑 *Sexo feito:* ${stats.sexo}
│📸 *Nudes recebidos:* ${stats.nudesRecebidos}
│📤 *Nudes enviados:* ${stats.nudesEnviados}
│📦 *Packs vistos:* ${stats.packsVistos}
│🎞️ *Pornôs assistidos:* ${stats.pornoVisto}
│🔊 *Gemidas ouvidas:* ${stats.gemidasOuvidas}
│👀 *Hentai assistido:* ${stats.hentaiAssistido}
│🔈 *Gemido tomado:* ${stats.gemidoTomado}
│💦 *Punheta mental:* ${stats.punhetaMental}
│🛁 *Punhetas no banho:* ${stats.punhetasNoBanho}
│🌙 *Role noturno safado:* ${stats.roleNoturno}
│👩‍❤️‍👨 *Viradas no "luv":* ${stats.viradasNoLuv}
│👧 *Traveco que viu e fingiu que não:* ${stats.travecoVisto}
│🌚 *Noites sem dormir pós punheta:* ${stats.noitesSemDormir}
╰────────────────────────────╯
`;

            reply(mensagem);
          } catch (e) {
            console.error(e);
            reply("❌ Ocorreu um erro ao gerar as estatísticas 😔");
          }
          break;
        }

        case "criador":
          //2. Envia o contato (vCard) com as informações do "gebe modz"
          await Misax.sendMessage(from, {
            contacts: {
              displayName: "gebe modz", // Nome exibido
              contacts: [
                {
                  vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:gebe modz\nTEL;type=CELL;type=VOICE;waid=558398164308: +55 83 9816 4308\nEND:VCARD`,
                },
              ],
            },
          });
          break;

        case "design":
          //2. Envia o contato (vCard) com as informações do "gebe modz"
          await Misax.sendMessage(from, {
            contacts: {
              displayName: "gebe modz", // Nome exibido
              contacts: [
                {
                  vcard: `BEGIN:VCARD\nVERSION:3.0\nFN:gebe modz\nTEL;type=CELL;type=VOICE;waid=558398164308: +55 83 9816 4308\nEND:VCARD`,
                },
              ],
            },
          });
          break;

        case "gerarnick2":
          {
            if (!args[0])
              return reply(
                `Insira um nome para gerar seu nick.\nExemplo: ${prefix + comando} gebe`,
              );
            let nick = args.join(" ");

            let estilos = [
              `★彡 ${nick} 彡★`,
              `✧彡${nick.toUpperCase()} 彡✧`,
              `꧁༒☬ ${nick} ☬༒꧂`,
              `➤${nick} ™`,
              `•●${nick}●•`,
              `♛${nick} ♛`,
              `⫷${nick}⫸`,
              `『${nick}』`,
              `【${nick}】`,
              `「${nick}」`,
              `≪${nick}≫`,
              `《${nick}》`,
              `✪ ${nick} ✪`,
              `⟦${nick}⟧`,
              `⋆ ${nick} ⋆`,
              `↭${nick} ↭`,
              `✓ ${nick}`,
              `⚡${nick} ⚡`,
              `💎 ${nick} 💎`,
              `✞${nick} ✞`,
              `➲ ${nick} ➲`,
              `☯${nick} ☯`,
              `ღ ${nick} ღ`,
              `☘️${nick} ☘️`,
              `⛧ ${nick} ⛧`,
              `♞${nick} ♞`,
              `♨ ${nick} ♨`,
              `☠${nick} ☠`,
              `⚔️ ${nick} ⚔️`,
              `🚀${nick} 🚀`,
              `👑 ${nick} 👑`,
              `🔥${nick} 🔥`,
              `❖ ${nick} ❖`,
              `☾${nick} ☽`,
              `༺ ${nick} ༻`,
              `☞${nick} ☜`,
              `⇝ ${nick} ⇜`,
              `☼${nick} ☼`,
              `₪ ${nick} ₪`,
              `『彡${nick}彡』`,
              `꧁${nick}꧂`,
              `⋘${nick}⋙`,
              `✩ ${nick} ✩`,
              `⛩${nick} ⛩`,
              `♬ ${nick} ♬`,
              `❀${nick} ❀`,
              `☁ ${nick} ☁`,
              `🌙${nick} 🌙`,
              `🌀 ${nick} 🌀`,
              `➳${nick} ➳`,
              `💠 ${nick} 💠`,
            ];

            let resultado =
              `📝 *Nicks Gerados para:* _${nick}_\n\n` + estilos.join("\n");
            reply(resultado);
          }
          break; //by: gebe

        case "piada": {
          let piadas = [
            "Não discuto com quem programa em Python… eles não têm argumentos!",
            "HTML e CSS entraram num bar… e saíram separados por margem.",
            "Por que o programador largou a namorada? Porque ela tinha muitos bugs.",
            "Programadores não têm sono, apenas estão em modo de hibernação.",
            "Erro 404: minha paciência não foi encontrada.",
            "Se SQL fosse música, seria sertanejo: SELECT * FROM amor WHERE coração = partido;",
            "A vida do programador é feita de IFs e ELSEs.",
            "Node.js e café: o par perfeito pra noites sem fim.",
            "Quando o Java caiu da árvore? No momento da exceção!",
            "Debugger é como um detetive em um romance ruim: sabe que alguém está errado, mas não sabe quem.",
            "Cuidado com loops infinitos… eles nunca acabam!",
            "Todo mundo odeia segunda-feira, menos o cron que roda só no domingo.",
            "Cometi um erro de digitação… agora o universo está colapsando.",
            "Git commit -m 'tentando salvar minha dignidade",
            "Meu coração é igual código ruim: difícil de entender e cheio de falhas.",
            "Sem café, sem código. Sem código, sem salário.",
            "Por que o servidor se atrasou? Porque perdeu o pacote!",
          ];
          let piadaAleatoria =
            piadas[Math.floor(Math.random() * piadas.length)];
          reply(piadaAleatoria);
          break; //by gebe
        }

        case "say":
          if (!args[0])
            return reply(
              `digite algo  apos o comando, exemplo: ${prefix}say ola mundo`,
            );
          let texto = args.join(" ");
          reply(`${texto}`);
          break; //by: gebe modz

        case "logomodz":
          if (!q) {
            enviar("❌ Faltou o nome do logo. Use: *.logo Pedrozz Mods*");
            return;
          }

          reagir(from, "🎨"); // reação de criando

          try {
            const nome = encodeURIComponent(q.trim());
            const url = `https://gebeofapi.speedhosting.cloud/api/logos/logo?nome=${nome}&apikey=Gebe1`;

            await clara.sendMessage(
              from,
              {
                image: { url: url },
                caption: `🖼️ Aqui está seu logo personalizado:\n*${q}*`,
              },
              { quoted: selo },
            );

            reagir(from, "✅"); // sucesso
          } catch (e) {
            console.log("Erro ao gerar logo:", e);
            enviar("❌ Ocorreu um erro ao criar o logo.");
            reagir(from, "❌");
          }
          break;

       
case 'playvideo': {
  if (!q) {
    return Misax.sendMessage(info.key.remoteJid, {
      text: '❌ Digite o nome do vídeo para buscar.'
    });
  }

  try {
    const query = encodeURIComponent(q.trim());
    const apiUrl = `https://api.speedhosting.cloud/api/download/PlayVideo?query=${query}&apikey=SUAKEY`;

    const res = await fetch(apiUrl);
    const contentType = res.headers.get('content-type') || '';

    if (!contentType.includes('application/json')) {
      return Misax.sendMessage(info.key.remoteJid, {
        text: '❌ A API retornou HTML em vez de JSON.'
      });
    }

    const json = await res.json();

    if (!json.resultado?.LinkAudio) {
      return Misax.sendMessage(info.key.remoteJid, {
        text: '❌ Vídeo não encontrado ou erro na resposta.'
      });
    }

    await Misax.sendMessage(info.key.remoteJid, {
      video: { url: json.resultado.LinkAudio },
      caption: `🎬 *${json.resultado.Nome || 'Vídeo'}*`
    }, { quoted: info });

  } catch (e) {
    console.error('Erro no comando playvideo:', e);
    Misax.sendMessage(info.key.remoteJid, {
      text: '❌ Erro ao tentar buscar ou enviar o vídeo.'
    });
  }
}
break;
  
        // 💜 FIM DOS COMANDOS ALEATÓRIOS  💜

        ////💜💜💜💜 COMANDOS  DE LOGOS TOTAL DE.COMANDOS 54

        case "logomodz":
          if (!q) {
            enviar("❌ Faltou o nome do logo. Use: *.logo Pedrozz Mods*");
            return;
          }

          reagir(from, "🎨"); // reação de criando

          try {
            const nome = encodeURIComponent(q.trim());
            const url = `https://gebeofapi.speedhosting.cloud/api/logos/logo?nome=${nome}&apikey=Gebe1`;

            await Misax.sendMessage(
              from,
              {
                image: { url: url },
                caption: `🖼️ Aqui está seu logo personalizado:\n*${q}*`,
              },
              { quoted: seloNubank },
            );

            reagir(from, "✅"); // sucesso
          } catch (e) {
            console.log("Erro ao gerar logo:", e);
            enviar("❌ Ocorreu um erro ao criar o logo.");
            reagir(from, "❌");
          }
          break;

        case "logohacker":
          if (!q) {
            enviar("❌ Faltou o nome do logo. Use: *.logohacker gebe*");
            return;
          }

          reagir(from, "💻"); // Reação de hacker style

          try {
            const nome = encodeURIComponent(q.trim());
            const url = `https://gebeofapi.speedhosting.cloud/api/logos/logo4?nome=${nome}&apikey=Gebe`;

            await Misax.sendMessage(
              from,
              {
                image: { url: url },
                caption: `💀 Aqui está seu logo estilo *HACKER*:\n*${q}*`,
              },
              { quoted: seloNubank },
            );

            reagir(from, "✅");
          } catch (e) {
            console.log("Erro ao gerar logohacker:", e);
            enviar("❌ Ocorreu um erro ao criar o logo hacker.");
            reagir(from, "❌");
          }
          break;

        case "logomisterio":
          if (!q) {
            enviar("❌ Faltou o nome! Exemplo: *.logomisterio Pedrozz Mods*");
            return;
          }

          reagir(from, "🎨"); // Reagindo com pincel

          try {
            const nomeLogo = encodeURIComponent(q);
            const url = `https://gebeofapi.speedhosting.cloud/api/logos/logo5?nome=${nomeLogo}&apikey=Gebe1`;

            await Misax.sendMessage(
              from,
              {
                image: { url },
                caption: `🖼️ *Logo Misteriosa criada!*\n👤 Criador: Gebe\n📛 Nome: ${q}`,
              },
              { quoted: seloNubank },
            );

            reagir(from, "✅");
          } catch (e) {
            console.error("Erro ao gerar logo:", e);
            enviar("❌ Deu erro ao gerar a logo.");
            reagir(from, "❌");
          }
          break;

        case "estrelas":
        case "grafite":
        case "grafite2":
        case "horror":
        case "colorido":
        case "desfoque":
        case "zombie":
        case "naruto":
        case "aniversario":
        case "amongus":
        case "glitch":
        case "write":
        case "advancedglow":
        case "typography":
        case "pixelglitch":
        case "neonglitch":
        case "flag":
        case "flag3d":
        case "deleting":
        case "blackpink":
        case "glowing":
        case "underwater":
        case "logomaker":
        case "cartoon":
        case "papercut":
        case "watercolor":
        case "effectclouds":
        case "blackpinklogo":
        case "gradient":
        case "summerbeach":
        case "luxurygold":
        case "multicoloredneon":
        case "sandsummer":
        case "galaxywallpaper":
        case "1917":
        case "makingneon":
        case "royal":
        case "freecreate":
        case "galaxy":
        case "darkgreen":
        case "lighteffects":
        case "dragonball":
        case "neondevil":
        case "frozen":
        case "wooden3d":
        case "metal3d":
        case "ligatures":
        case "3druby":
        case "sunset":
        case "cemetery":
        case "halloween":
        case "blood":
        case "joker":
        case "clouds":
          if (!q) return reply("Você precisa acrescentar um texto!");
          try {
            reply(`Gerando seu logotipo, aguarde um pouquinho...`);
            let logoUrl = `https://api.nexfuture.com.br/api/logos/${comando}?texto=${encodeURIComponent(q)}`;
            let logoBuffer = await getBuffer(logoUrl);
            await Misax.sendMessage(
              from,
              { image: logoBuffer },
              { quoted: info },
            );
          } catch (error) {
            console.log(error);
            return reply(`Ocorreu um pequeno problema ao gerar seu logotipo!`);
          }
          break;

        ////💜💜💜💜 FIM DOS COMANDOS DE LOGO

        // 💜 COMANDOS DE BRINCADEIRAS 💜 TOTAL DE COMANDOS 21

        case "gostoso":
          if (!isGroup) return reply("so em grupo");
          if (!isJogos)
            return reply(
              `o modo brincadeira esta desativado se vc for adm use ${prefix}modobrincadeiras 1 ou chame um adm`,
            );
          Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de gostoso @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            Misax.sendMessage(
              from,
              {
                image: { url: imggostoso },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`,
                gifPlayback: true,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "gostosa":
          if (!isGroup) return reply("so em grupo");
          if (!isJogos)
            return reply(
              `o modo brincadeira esta desativado se vc for adm use ${prefix}modobrincadeiras 1 ou chame um adm`,
            );
          Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de gostosa @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            Misax.sendMessage(
              from,
              {
                image: { url: imggostosa },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa gostosa?\n• A porcentagem de chance é *${random}%*`,
                gifPlayback: true,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "matar":
        case "mata":
          if (!isGroup) return reply("so em grupo");
          if (!isJogos)
            return reply(
              `o modo brincadeira esta desativado se vc for adm use ${prefix}modobrincadeiras 1 ou chame um adm`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "marque o alvo que você quer matar, a mensagem ou o @",
            );
          Misax.sendMessage(
            from,
            {
              video: { url: matarcmd },
              gifPlayback: true,
              caption: `Você Acabou de matar o(a) @${menc_os2.split("@")[0]} 😈👹`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "nazista":
          if (!isJogos)
            return reply(
              `o modo brincadeira esta desativado se vc for adm use ${prefix}modobrincadeiras 1 ou chame um adm`,
            );
          if (!isGroup) return reply("so em grupo");
          Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de nazista: *@${sender_ou_n.split("@")[0]}* aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            Misax.sendMessage(
              from,
              {
                image: { url: imgnazista },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa nazista?\n• Porcentagem de chance de ser uma pessoa nazista: *${random}%.* `,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "beijo":
        case "beijar":
          if (!isGroup) return reply("so em grupo");
          if (!isJogos)
            return reply(
              "Modo brincadeiras esta desativado, fale com um adm ou se voce for digite /modobrincadeiras 1",
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "marque a pessoa que você quer beijar, a mensagem ou o @",
            );
          Misax.sendMessage(
            from,
            {
              video: { url: beijocmd },
              gifPlayback: true,
              caption: `Você deu um beijo gostoso na(o) @${menc_os2.split("@")[0]} 😁👉👈❤`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "tapa":
          if (!isGroup) return reply("so em grupo");
          if (!isJogos)
            return reply(
              "Modo brincadeiras esta desativado, fale com um adm ou se voce for digite /modobrincadeiras 1",
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque o alvo que você quer da um tapa, a mensagem ou o @",
            );
          Misax.sendMessage(
            from,
            {
              video: { url: tapacmd },
              gifPlayback: true,
              caption: `Você acabou de da um tapa na raba da *@${menc_os2.split("@")[0]}*. 😼`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "chute":
        case "chutar":
          if (!isGroup) return reply("so em grupo");
          if (!isJogos)
            return reply(
              "Modo brincadeiras esta desativado, fale com um adm ou se voce for digite /modobrincadeiras 1",
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "marque o alvo que você quer da um chute, a mensagem ou o @",
            );
          Misax.sendMessage(
            from,
            {
              video: { url: chutecmd },
              gifPlayback: true,
              caption: `Você acabou de dar um chute em *@${menc_os2.split("@")[0]}*.`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "gay":
          if (!isGroup) return reply("so em grupo");
          if (!isJogos)
            return reply(
              `o modo brincadeira esta desativado se vc for adm use ${prefix}modobrincadeiras 1 ou chame um adm`,
            );
          Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de gay: @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: info },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            feio = random;
            boiola = random;
            if (boiola < 20) {
              var bo = "hmm... você é hetero...";
            } else if (boiola == 21) {
              var bo = "+/- boiola";
            } else if (boiola == 23) {
              var bo = "+/- boiola";
            } else if (boiola == 24) {
              var bo = "+/- boiola";
            } else if (boiola == 25) {
              var bo = "+/- boiola";
            } else if (boiola == 26) {
              var bo = "+/- boiola";
            } else if (boiola == 27) {
              var bo = "+/- boiola";
            } else if (boiola == 2) {
              var bo = "+/- boiola";
            } else if (boiola == 29) {
              var bo = "+/- boiola";
            } else if (boiola == 30) {
              var bo = "+/- boiola";
            } else if (boiola == 31) {
              var bo = "tenho minha desconfiança...";
            } else if (boiola == 32) {
              var bo = "tenho minha desconfiança...";
            } else if (boiola == 33) {
              var bo = "tenho minha desconfiança...";
            } else if (boiola == 34) {
              var bo = "tenho minha desconfiança...";
            } else if (boiola == 35) {
              var bo = "tenho minha desconfiança...";
            } else if (boiola == 36) {
              var bo = "tenho minha desconfiança...";
            } else if (boiola == 37) {
              var bo = "tenho minha desconfiança...";
            } else if (boiola == 3) {
              var bo = "tenho minha desconfiança...";
            } else if (boiola == 39) {
              var bo = "tenho minha desconfiança...";
            } else if (boiola == 40) {
              var bo = "tenho minha desconfiança...";
            } else if (boiola == 41) {
              var bo = "você é né?";
            } else if (boiola == 42) {
              var bo = "você é né?";
            } else if (boiola == 43) {
              var bo = "você é né?";
            } else if (boiola == 44) {
              var bo = "você é né?";
            } else if (boiola == 45) {
              var bo = "você é né?";
            } else if (boiola == 46) {
              var bo = "você é né?";
            } else if (boiola == 47) {
              var bo = "você é né?";
            } else if (boiola == 4) {
              var bo = "você é né?";
            } else if (boiola == 49) {
              var bo = "você é né?";
            } else if (boiola == 50) {
              var bo = "você é ou não?";
            } else if (boiola > 51) {
              var bo = "você é gay...";
            }
            Misax.sendMessage(
              from,
              {
                image: { url: imggay },
                caption: `Qual é a porcentagem de chance do(a) *@${sender_ou_n.split("@")[0]}* ser gay?\n• *${random}% homossexual*, ${bo}`,
                mentions: [sender_ou_n],
                thumbnail: null,
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "louça":
          if (!isGroup) return reply("Só em Grupo");
          if (!isJogos && !isCreator)
            return reply(
              `Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`,
            );
          reagir(from, `🧽`);
          if (!menc_os2 || menc_jid2[1])
            return reply("*ta faltando nada ai nãoamiguinho(a)?*");
          Misax.sendMessage(
            from,
            {
              video: { url: `https://files.catbox.moe/0zvxb9.mp4` },
              gifPlayback: true,
              caption: ` *_O(a) ${pushname} acabou de botar:_*'
*o (a) @${menc_os2.split("@")[0]} pra lavar a louça😏*`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break; //by: gebe

        case "feio":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`,
            );
          Misax.sendMessage(from, {
            text: `❰ Pesquisando a sua ficha de feio : @${sender_ou_n.split("@")[0]} aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            feio = random;
            if (feio < 20) {
              var bo = "É não é feio";
            } else if (feio == 21) {
              var bo = "+/- feio";
            } else if (feio == 23) {
              var bo = "+/- feio";
            } else if (feio == 24) {
              var bo = "+/- feio";
            } else if (feio == 25) {
              var bo = "+/- feio";
            } else if (feio == 26) {
              var bo = "+/- feio";
            } else if (feio == 27) {
              var bo = "+/- feio";
            } else if (feio == 2) {
              var bo = "+/- feio";
            } else if (feio == 29) {
              var bo = "+/- feio";
            } else if (feio == 30) {
              var bo = "+/- feio";
            } else if (feio == 31) {
              var bo = "Ainda tá na média";
            } else if (feio == 32) {
              var bo = "Da pra pegar umas(ns) novinha(o) ainda";
            } else if (feio == 33) {
              var bo = "Da pra pegar umas(ns) novinha(o) ainda";
            } else if (feio == 34) {
              var bo = "É fein, mas tem baum coração";
            } else if (feio == 35) {
              var bo = "Tá na média, mas não deixa de ser feii";
            } else if (feio == 36) {
              var bo = "Bonitin mas é feio com orgulho";
            } else if (feio == 37) {
              var bo = "Feio e preguiçoso(a), vai se arrumar praga feia";
            } else if (feio == 3) {
              var bo = "tenho ";
            } else if (feio == 39) {
              var bo = "Feio, mas um banho E se arrumar, deve resolver";
            } else if (feio == 40) {
              var bo =
                "FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity";
            } else if (feio == 41) {
              var bo = "você é Feio, mas é legal, continue assim";
            } else if (feio == 42) {
              var bo =
                "Nada que uma maquiagem e se arrumar, que não resolva 🥴";
            } else if (feio == 43) {
              var bo = "Feio que dói de ver, compra uma máscara que melhora";
            } else if (feio == 44) {
              var bo = "Feio mas nada que um saco na cabeça não resolva né!?";
            } else if (feio == 45) {
              var bo = "você é feio, mas tem bom gosto";
            } else if (feio == 46) {
              var bo = "Feio mas tem muitos amigos";
            } else if (feio == 47) {
              var bo = "Feio mas tem lábia pra pegar várias novinha";
            } else if (feio == 4) {
              var bo = "Feio e ainda não sabe se vestir, vixi";
            } else if (feio == 49) {
              var bo = "Feiooo";
            } else if (feio == 50) {
              var bo = "você é Feio, mas não se encherga 🧐";
            } else if (feio > 51) {
              var bo = "você é Feio demais 🙈";
            }

            Misax.sendMessage(
              from,
              {
                image: { url: imgfeio },
                caption: `  O quanto você é feio? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ feio 🙉\n\n${bo}`,
                mentions: [sender_ou_n],
                thumbnail: null,
              },
              { quoted: selo },
            );
          }, 7000);
          break;

        case "dogolpe":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for um, apenas digite ${prefix}modobrincadeira 1`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque a mensagem com o comando ou marque o @ do usuário..",
            );
          random = `${Math.floor(Math.random() * 100)}`;
          Misax.sendMessage(from, {
            text: `*GOLPISTA ENCONTRADO👉🏻*\n\n*GOLPISTA* : *@${menc_os2.split("@")[0]}*\n*PORCENTAGEM DO GOLPE* : ${random}%😂\n\nEle(a) gosta de ferir sentimentos 😢`,
            mentions: [menc_os2],
          });
          break;

        case "tagme":
          const tagme = `@${sender.split("@")[0]} ✔️`;
          await mentions(tagme, [sender], true);
          break;
        //💜 agora e os rank💜

        case "rankgay":
        case "rankgays":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("so com o modobrincadeiras on");
          ABC = `🏳️‍🌈 *RANK DOS 5 MAIS GAYS DO GRUPO!*\n—\n`;
          TMGAYS = [
            "Esse aí gosta de cheirar banana até umas horas kakak",
            "Gosta de ser dominado e chicoteado.",
            "Viadinho gente boa, nada contra os veados.",
            "Esse aí roda mais que roda de caminhão.",
            "Mapoa é você meu amor?",
            "Esse aí ainda tá no armário, a franga tá presa!",
            "Profissional na garganta profunda!",
            "Essa bicha é finíssima!",
            "Essa aí precisa sair do closet ainda!",
            "Vixi esse aí e vitaminado!",
            "Vixi um gay vulgo irene!",
            "Poc fechosa, amo tu mona!",
          ];
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGAYS[Math.floor(Math.random() * TMGAYS.length)]} )\n`;
          }
          mencionarIMG(ABC, rnkgay);
          break;

        case "rankgado":
        case "rankgados":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("so com o modobrincadeiras on");
          ABC = `RANK DOS 5 MAIS GADO DO GRUPO 🐂🐃\n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          mencionarIMG(ABC, rnkgado);
          break;

        case "rankcorno":
        case "rankcornos":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("so com o modobrincadeiras on");
          ABC = `🐂 *RANK DOS 5 MAIS CORNOS DO GRUPO!*\n—\n`;
          TMCRN = [
            "Familiar, leva até chifre com os parentes!",
            "Masoquista, leva chifre mas não larga a mulher!",
            "Atéu, leva chifre e não acredita!",
            "Político, só faz promessa e não cumpre o que fala!",
            "Esse é que leva chifres, vai embora e volta por causa das crianças.",
            "Xuxa, o que não larga a mulher por causa dos baixinhos.",
            "Famoso, aquele que por onde passa é reconhecido como tal.",
            "Inflação, a cada dia que passa o chifre aumenta.",
          ];
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMCRN[Math.floor(Math.random() * TMCRN.length)]} )\n`;
          }
          mencionarIMG(ABC, rnkcorno);
          break;

        case "rankgostosos":
        case "rankgostoso":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta off");
          ABC = `*RANK DOS 5 MAIS GOSTOSOS DO GRUPO* 😏🔥\n—\n`;
          TMGSTS = [
            "Você tá olhando para um semi Deus!",
            "Mds, me apaixonei! Passa o insta gatinho?",
            "Ei ei gatinhas, o gostosão do grupo chegou!",
            "Gostoso? É, pena que é homem galinha!",
            "Não sei se comparo esse gostoso com o Ares Ridalgo!",
            "Cruz credo, porque tu tá aqui? Tu é feio desgraça!",
          ];
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMGSTS[Math.floor(Math.random() * TMGSTS.length)]} )\n`;
          }
          mencionarIMG(ABC, rnkgostoso);
          break;

        case "ranknazista":
        case "ranknazistas":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n—\n`;
          TMNZTS = [
            "Soldado nazista, marcha com estilo.‍",
            "Comandante implacável, lidera com rigor.️",
            "Nazista estrategista, conquista territórios.️",
            "Mestre da ordem, disciplina em primeiro lugar.",
            "Soldado de elite, Nazista hardcore.",
            "General invencível, domina as batalhas.",
            "Nazista disciplinado, fiel à causa.",
            "Líder autoritário, impõe respeito.️",
            "Soldado feroz, nazismo no coração.",
            "Mestre da propaganda, convence com palavras.️",
            "Nazista moderno, tecnologia na guerra.",
            "Máquina de guerra, implacável e eficiente.️",
            "Comandante supremo, nazismo eterno.",
            "Soldado leal, marcha em nome da ideologia.",
            "Nazista clássico, revive o passado.",
            "General poderoso, Nazista do século XXI.",
            "Comandante inabalável, Nazista de honra.",
            "Soldado devoto, nazismo no sangue.",
            "Mestre da retórica nazista, convence a todos.",
            "Nazista visionário, futuro sob a suástica.",
          ];
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMNZTS[Math.floor(Math.random() * TMNZTS.length)]} )\n`;
          }
          mencionarIMG(ABC, rnknazista);
          break;

        case "rankotaku":
        case "rankotakus":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n—\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° *[${Math.floor(Math.random() * 100)}%]* - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`;
          }
          mencionarIMG(ABC, rnkotaku);
          break;

        case "rankpau":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n—\n`;
          TMPAU = [
            "Pequeno pra cact, se mata maluco",
            `Pequenininho chega ser até fofo`,
            `Menor que meu dedo mindinho pequeno demais`,
            `Até que dá sentir, tá na média`,
            `Até que é grandinho`,
            `Grande até!`,
            `Gigantesco igual meu braço`,
            `Enorme quase chega no útero`,
            `Grandão demais em, e uii`,
            `Vara de pegar manga, grande demais, como sai na rua assim??`,
            "Que grandão em, nasceu metade animal",
          ];
          for (var i = 0; i < 5; i++) {
            ABC += `• *${i + 1}°* @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]} -> ( ${TMPAU[Math.floor(Math.random() * TMPAU.length)]} )\n`;
          }
          mencionarIMG(ABC, rnkpau);
          break;

        case "rankcasalzin":
        case "rankcasais":
        case "rankcasal":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          await reagir(from, "💞");

          const membros = groupMembers;
          const casais = [];
          for (let i = 0; i < 10; i++) {
            const casal = membros[Math.floor(Math.random() * membros.length)];
            if (casal && !casais.includes(casal)) {
              casais.push(casal);
            }
          }

          const casaisTEXT = [
            "Esses 2 aqui se pega no sigilo 👀",
            "Eita eita, esses aqui amam se pegar nos escurinho 🤭",
            "Ainnn, esses aqui então, vou nem falar nada...😶",
            "O par mais perfeito da história 💋",
            "Esses 2 brigam muito, porém no off tão de sapecagens 😈",
            "Esses 2 aqui... RUMMMM 😳",
            "Esses amam ficar indo gf 🥶",
            "Esses 2 aqui, muitos safadinhus 😏",
            "Esses aqui, vou falar a verdade, um deles trai o outro....😨",
            "Pior casal do mundo, mas na hora H...🤤",
            "Amo esse casal, ele é muito fofoooo 💞",
          ];

          const rankzincasalzinimg = "https://files.catbox.moe/0b8878.jpg";

          let rankzincasalzin = `『 ❣ 』𝐑𝐀𝐍𝐊 𝐂𝐀𝐒𝐀𝐈𝐒 𝐃𝐎 𝐂𝐇𝐀𝐓︎ \n\n`;

          for (let i = 0; i < casais.length; i += 2) {
            if (casais[i + 1]) {
              rankzincasalzin += `@${casais[i].id.split("@")[0]} e @${casais[i + 1].id.split("@")[0]}\n${casaisTEXT[Math.floor(Math.random() * casaisTEXT.length)]}\n\n`;
            }
          }

          rankzincasalzin += `${NomeDoBot}`;

          mencionarIMG(rankzincasalzin, rankzincasalzinimg);
          break;

        case "rankfalido":
        case "rankfalidos":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          var porcentagem = `${Math.floor(Math.random() * 105)}`;
          membr = [];
          const falido1 = groupMembers;
          const falido2 = groupMembers;
          const falido3 = groupMembers;
          const falido4 = groupMembers;
          const falido5 = groupMembers;
          var porcent61 =
            porcentagem[Math.floor(Math.random() * porcentagem.length)];
          var porcent62 =
            porcentagem[Math.floor(Math.random() * porcentagem.length)];
          var porcent63 =
            porcentagem[Math.floor(Math.random() * porcentagem.length)];
          var porcent64 =
            porcentagem[Math.floor(Math.random() * porcentagem.length)];
          var porcent65 =
            porcentagem[Math.floor(Math.random() * porcentagem.length)];
          const falidos1 = falido1[Math.floor(Math.random() * falido1.length)];
          const falidos2 = falido2[Math.floor(Math.random() * falido2.length)];
          const falidos3 = falido3[Math.floor(Math.random() * falido3.length)];
          const falidos4 = falido4[Math.floor(Math.random() * falido4.length)];
          const falidos5 = falido5[Math.floor(Math.random() * falido5.length)];
          FALIDOTEXT = [
            "Falido total. 💸",
            "Mestre do prejuízo. 📉",
            "Falência fashion. 👗",
            "Falido épico. saga 💸",
            "Mestre da ruína. ⚡",
            "Falido cósmico, deve até ⭐",
            "Estrategista da falência. 📉🤔",
            "Falido magnífico. ✨",
            "Mestre das dívidas. ⚡",
            "Falência quântica. 🔍💸",
            "Mestre dos boletos. 🧾",
            "Falido moderno. 💻",
            "Especialista em dívidas. 🏦",
            "Falência clássica. 🎻",
            "Mestre do saldo negativo. 📉💳",
            "Falido intergaláctico. 🌌",
            "Estrategista financeiro da decadência. 💹📉",
            "Mestre dos débitos. 💳",
            "Falência holográfica. 🔄💸",
            "Falido contemporâneo. 🏙️",
          ];
          rnkfalido = "https://telegra.ph/file/aab2f61b9629ea40e2120.jpg";
          rankzinfalido = `*『 _Falidos 🗑️ no grupo:_ 』*
╔═╌✯╌═⊱×⊰平⊱×⊰═╌✯╌═╗
║𖣴⋗ 🗑️ @${falidos1.id.split("@")[0]}
║ ${FALIDOTEXT[Math.floor(Math.random() * FALIDOTEXT.length)]}
║𖣴⋗ 🗑️ @${falidos2.id.split("@")[0]}
║ ${FALIDOTEXT[Math.floor(Math.random() * FALIDOTEXT.length)]}
║𖣴⋗🗑️ @${falidos3.id.split("@")[0]}
║ ${FALIDOTEXT[Math.floor(Math.random() * FALIDOTEXT.length)]}
║𖣴⋗🗑️ @${falidos4.id.split("@")[0]}
║ ${FALIDOTEXT[Math.floor(Math.random() * FALIDOTEXT.length)]}
║𖣴⋗ 🗑️ @${falidos5.id.split("@")[0]}
║ ${FALIDOTEXT[Math.floor(Math.random() * FALIDOTEXT.length)]}
╚═╌✯╌═⊱×⊰平⊱×⊰═╌✯╌═╝`;
          membr.push(falidos1.id);
          membr.push(falidos2.id);
          membr.push(falidos3.id);
          membr.push(falidos4.id);
          membr.push(falidos5.id);
          mencionarIMG(rankzinfalido, rnkfalido);
          break;

        case "ranksigma":
        case "ranksigmas":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `🗿🍷 𝐑𝐀𝐍𝐊 𝐃𝐎𝐒 5 𝐌𝐀𝐈𝐒 𝐒𝐈𝐆𝐌𝐀𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎\n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° 『${Math.floor(Math.random() * 100)}%』 - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          await mencionarIMG(ABC, rnksigma);
          break;

        case "rankbeta":
        case "rankbetas":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `😂 𝐑𝐀𝐍𝐊 𝐃𝐎𝐒 5 𝐌𝐀𝐈𝐒 𝐁𝐄𝐓𝐀𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎\n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° 『${Math.floor(Math.random() * 100)}%』 - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          await mencionarIMG(ABC, rnkbeta);
          break;

        case "rankbaiano":
        case "rankbaianos":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `💤 𝐑𝐀𝐍𝐊 𝐃𝐎𝐒 5 𝐌𝐀𝐈𝐒 𝐁𝐀𝐈𝐀𝐍𝐎𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎\n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° 『${Math.floor(Math.random() * 100)}%』 - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          await mencionarIMG(ABC, rnkbaiano);
          break;

        case "rankbaiana":
        case "rankbaianas":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `😴 𝐑𝐀𝐍𝐊 𝐃𝐀𝐒 5 𝐌𝐀𝐈𝐒 𝐁𝐀𝐈𝐀𝐍𝐀𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎\n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° 『${Math.floor(Math.random() * 100)}%』 - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          await mencionarIMG(ABC, rnkbaiana);
          break;

        case "rankcarioca":
        case "rankcariocas":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `🔫 𝐑𝐀𝐍𝐊 𝐃𝐎𝐒 5 𝐌𝐀𝐈𝐒 𝐂𝐀𝐑𝐈𝐎𝐂𝐀𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎\n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° 『${Math.floor(Math.random() * 100)}%』 - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          await mencionarIMG(ABC, rnkcarioca);
          break;

        case "ranklouco":
        case "rankloucos":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `💀 𝐑𝐀𝐍𝐊 𝐃𝐎𝐒 5 𝐌𝐀𝐈𝐒 𝐋𝐎𝐔𝐂𝐎𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎\n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° 『${Math.floor(Math.random() * 100)}%』 - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          await mencionarIMG(ABC, rnklouco);
          break;

        case "ranklouca":
        case "rankloucas":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `💀 𝐑𝐀𝐍𝐊 𝐃𝐀𝐒 5 𝐌𝐀𝐈𝐒 𝐋𝐎𝐔𝐂𝐀𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎\n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° 『${Math.floor(Math.random() * 100)}%』 - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          await mencionarIMG(ABC, rnklouca);
          break;

        case "ranksafada":
        case "ranksafadas":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `🔥 𝐑𝐀𝐍𝐊 𝐃𝐀𝐒 5 𝐌𝐀𝐈𝐒 𝐒𝐀𝐅𝐀𝐃𝐈𝐍𝐇𝐀𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎\n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° 『${Math.floor(Math.random() * 100)}%』 - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          await mencionarIMG(ABC, rnksafada);
          break;

        case "ranksafado":
        case "ranksafados":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `𝐑𝐀𝐍𝐊 𝐃𝐎𝐒 5 𝐌𝐀𝐈𝐒 𝐒𝐀𝐅𝐀𝐃𝐈𝐍𝐇𝐎𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎🥵\n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° 『${Math.floor(Math.random() * 100)}%』 - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          await mencionarIMG(ABC, rnksafado);
          break;

        case "rankmacaco":
        case "rankmacacos":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `🐒 𝐑𝐀𝐍𝐊 𝐃𝐎𝐒 5 𝐌𝐀𝐈𝐒 𝐌𝐀𝐂𝐀𝐂𝐎𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎\n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° 『${Math.floor(Math.random() * 100)}%』 - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          await mencionarIMG(ABC, rnkmacaco);
          break;

        case "rankmacaca":
        case "rankmacacas":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `🙈 𝐑𝐀𝐍𝐊 𝐃𝐀𝐒 5 𝐌𝐀𝐈𝐒 𝐌𝐀𝐂𝐀𝐂𝐀𝐒 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎 \n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° 『${Math.floor(Math.random() * 100)}%』 - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          await mencionarIMG(ABC, rnkmacaca);
          break;

        case "rankputa":
        case "rankputas":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          ABC = `🔞 𝐑𝐀𝐍𝐊 𝐃𝐀𝐒 5 𝐌𝐀𝐈𝐒 𝐏𝐔𝐓𝐀 𝐃𝐎 𝐆𝐑𝐔𝐏𝐎\n\n`;
          for (var i = 0; i < 5; i++) {
            ABC += `• ${i + 1}° 『${Math.floor(Math.random() * 100)}%』 - @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`;
          }
          await mencionarIMG(ABC, rnkputa);
          break;

        case "rankcu":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          membr = [];
          const cu1 = groupMembers;
          const cu2 = groupMembers;
          const cu3 = groupMembers;
          const cu4 = groupMembers;
          const cu5 = groupMembers;
          const xzcs1 = cu1[Math.floor(Math.random() * cu1.length)];
          const xzcs2 = cu2[Math.floor(Math.random() * cu2.length)];
          const xzcs3 = cu3[Math.floor(Math.random() * cu3.length)];
          const xzcs4 = cu4[Math.floor(Math.random() * cu4.length)];
          const xzcs5 = cu5[Math.floor(Math.random() * cu5.length)];
          var cuzxzc1 = [
            "NAO DEU NADA🥲",
            `DEU SO A BCT`,
            `GOSTOSO (A) JA DEU O CU`,
            `JA VIROU MARMITA`,
            `DEU TUDO`,
            `DEU O CU E A BCT`,
          ];
          var cuzxzc2 = [
            "NAO DEU NADA🥲",
            `DEU SO A BCT`,
            `GOSTOSO (A) JA DEU O CU`,
            `JA VIROU MARMITA`,
            `DEU TUDO`,
            `DEU O CU E A BCT`,
          ];
          var cuzxzc3 = [
            "NAO DEU NADA🥲",
            `DEU SO A BCT`,
            `GOSTOSO (A) JA DEU O CU`,
            `JA VIROU MARMITA`,
            `DEU TUDO`,
            `DEU O CU E A BCT`,
          ];
          var cuzxzc4 = [
            "NAO DEU NADA🥲",
            `DEU SO A BCT`,
            `GOSTOSO (A) JA DEU O CU`,
            `JA VIROU MARMITA`,
            `DEU TUDO`,
            `DEU O CU E A BCT`,
          ];
          var cuzxzc5 = [
            "NAO DEU NADA🥲",
            `DEU SO A BCT`,
            `GOSTOSO (A) JA DEU O CU`,
            `JA VIROU MARMITA`,
            `DEU TUDO`,
            `DEU O CU E A BCT`,
          ];
          const cuz1 = cuzxzc1[Math.floor(Math.random() * cuzxzc1.length)];
          const cuz2 = cuzxzc2[Math.floor(Math.random() * cuzxzc2.length)];
          const cuz3 = cuzxzc3[Math.floor(Math.random() * cuzxzc3.length)];
          const cuz4 = cuzxzc4[Math.floor(Math.random() * cuzxzc4.length)];
          const cuz5 = cuzxzc5[Math.floor(Math.random() * cuzxzc5.length)];
          pdr = `𝐸𝑆𝑆𝐸𝑆 𝑆𝐴𝑂 𝑂𝑆 𝐶𝐴𝑅𝐴 𝑄𝑈𝐸 𝑀𝐴𝐼𝑆 𝐷𝐴𝑂 𝑂 𝐶𝑈 𝑁𝑂 𝐺𝑅𝑈𝑃𝑂:\n${groupName}\n\n@${xzcs1.id.split("@")[0]}\n${cuz1}\n\n@${xzcs2.id.split("@")[0]}\n${cuz2}\n\n@${xzcs3.id.split("@")[0]}\n${cuz3}\n\n@${xzcs4.id.split("@")[0]}\n${cuz4}\n\n@${xzcs5.id.split("@")[0]}\n${cuz5}\n\n ${NomeDoBot}`;
          membr.push(xzcs1.id);
          membr.push(xzcs2.id);
          membr.push(xzcs3.id);
          membr.push(xzcs4.id);
          membr.push(xzcs5.id);
          mentions(pdr, membr, true);
          break;

        case "rankbct":
        case "rankbuceta":
        case "rankbucetudas":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos) return reply("modobrincadeiras ta ofi");
          var porcentagem = `${Math.floor(Math.random() * 105)}`;
          membr = [];

          const buceta1 = groupMembers;
          const buceta2 = groupMembers;
          const buceta3 = groupMembers;
          const buceta4 = groupMembers;
          const buceta5 = groupMembers;

          var porcent =
            porcentagem[Math.floor(Math.random() * porcentagem.length)];
          var porcent2 =
            porcentagem[Math.floor(Math.random() * porcentagem.length)];
          var porcent3 =
            porcentagem[Math.floor(Math.random() * porcentagem.length)];
          var porcent4 =
            porcentagem[Math.floor(Math.random() * porcentagem.length)];
          var porcent5 =
            porcentagem[Math.floor(Math.random() * porcentagem.length)];

          const bucetas1 = buceta1[Math.floor(Math.random() * buceta1.length)];
          const bucetas2 = buceta2[Math.floor(Math.random() * buceta2.length)];
          const bucetas3 = buceta3[Math.floor(Math.random() * buceta3.length)];
          const bucetas4 = buceta4[Math.floor(Math.random() * buceta4.length)];
          const bucetas5 = buceta5[Math.floor(Math.random() * buceta5.length)];

          const TMPBCT = [
            "Buceta rosinha, parece que menstrua danone! 🫣",
            "Buceta mó preta, parece o sufaco das minhas primas. 🤐",
            "Mó bucetão, parece da Elisa Shances. 😈",
            "Bct lisinha, parece eu sem dinheiro. 🥲",
            "Deliciosa, porém parece a mata atlântica. 🌼",
            "Deliciosa e macia. 🥰",
            "Pior que o correio, só pacote. 😏",
            "Provoca até nos sonhos. 🤤",
            "Sonho de qualquer homem. 😜",
            "Quem é Mia Khalifa perto de você?. 😉",
            "Se essa é a porta do paraíso, eu queria ser a chave. 😍",
          ];
          rankzinbucetaimg = "https://files.catbox.moe/j53cob.jpg";
          rankzinbuceta = `*『 _Essas são as mais bucetudas 🤤 do grupo:_ 』*

 😈 @${bucetas1.id.split("@")[0]}
 ${TMPBCT[Math.floor(Math.random() * TMPBCT.length)]}

 😈 @${bucetas2.id.split("@")[0]}
 ${TMPBCT[Math.floor(Math.random() * TMPBCT.length)]}

 😈 @${bucetas3.id.split("@")[0]}
 ${TMPBCT[Math.floor(Math.random() * TMPBCT.length)]}

 😈 @${bucetas4.id.split("@")[0]}
 ${TMPBCT[Math.floor(Math.random() * TMPBCT.length)]}

 😈 @${bucetas5.id.split("@")[0]}
 ${TMPBCT[Math.floor(Math.random() * TMPBCT.length)]}`;

          membr.push(bucetas1.id);
          membr.push(bucetas2.id);
          membr.push(bucetas3.id);
          membr.push(bucetas4.id);
          membr.push(bucetas5.id);

          mencionarIMG(rankzinbuceta, rankzinbucetaimg);
          break;
        //💜 FIMMMM 💜

        case "morte":
          if (!isJogos && isGroupAdmins)
            return reply(
              "🌸O MODO BRINCADEIRAS PRESCISA ESTA ATIVO 🌸\n *_pessa a um adm para ativar o modo brincadeiras*",
            );
          morrer1 = `${Math.floor(Math.random() * 31)}`;
          morrer2 = `${Math.floor(Math.random() * 9)}`;
          var ano = "2";
          ano1 = `${Math.floor(Math.random() * 300)}`;
          morrer = `${morrer1}.${morrer2}.${ano}${ano1}`;
          safira = `╭═════════════════ ⪩
╰╮ू ፝͜❥⃟😵𝐃𝐀𝐓𝐀 𝐃𝐀 𝐒𝐔𝐀 𝐌𝐎𝐑𝐓𝐄👁⃟ू ፝͜❥
╭┤➢☃️ 「𝘖𝘓𝘈: ${pushname}」
╭┤➢📆 「𝘋𝘈𝘛𝘈: ${morrer1}/0${morrer2}/${ano}${ano1}
╭┤➢💐 「meus pêsames」
┃╰══ ⪨
╰═════════════════ ⪨`;
          reply(safira);
          break;

        case "pau":
          if (!isJogos && isGroupAdmins)
            return reply(
              "🌸O MODO BRINCADEIRAS PRESCISA ESTA ATIVO 🌸\n> *_pessa a um adm para ativar o modo brincadeiras*",
            );
          random = `${Math.floor(Math.random() * 35)}`;
          const tamanho = random;
          if (tamanho < 13) {
            pp = "só a fimose";
          } else if (tamanho == 13) {
            pp = "passou da média😳";
          } else if (tamanho == 14) {
            pp = "passou da média😳";
          } else if (tamanho == 15) {
            pp = "eita, vai pegar manga?";
          } else if (tamanho == 16) {
            pp = "eita, vai pegar manga?";
          } else if (tamanho == 17) {
            pp = "calma man, a mina não é um poço😳";
          } else if (tamanho == 18) {
            pp = "calma man, a mina não é um poço😳";
          } else if (tamanho == 19) {
            pp = "calma man, a mina não é um poço😳";
          } else if (tamanho == 20) {
            pp = "você tem um poste no meio das pernas";
          } else if (tamanho == 21) {
            pp = "você tem um poste no meio das pernas";
          } else if (tamanho == 22) {
            pp = "você tem um poste no meio das pernas";
          } else if (tamanho == 23) {
            pp = "você tem um poste no meio das pernas";
          } else if (tamanho == 24) {
            pp = "você tem um poste no meio das pernas";
          } else if (tamanho > 25) {
            pp = "vai procurar petróleo com isso?";
          }
          safira = `╭═════════════════ ⪩
╰╮ू ፝͜❥⃟🍌𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐃𝐎 𝐏𝐀𝐔👁⃟ू ፝͜❥
╭┤➢☃️ 「𝘖𝘓𝘈: ${pushname}」
╭┤➢🍆「𝘚𝘌𝘜 𝑃𝐴𝑈 𝘛𝘌𝘔: ${random}𝘊𝘔
╭┤➢✉️ 「${pp}」
┃╰══ ⪨
╰═════════════════ ⪨`;
          reply(safira);
          break;

        case "chifre":
          if (!isJogos && isGroupAdmins)
            return reply(
              "🌸O MODO BRINCADEIRAS PRESCISA ESTA ATIVO 🌸\n> *_pessa a um adm para ativar o modobrincadeiras *",
            );
          random2 = `${Math.floor(Math.random() * 35)}`;
          const tamanho2 = random2;
          if (tamanho2 < 13) {
            pp = "muito corno🤟";
          } else if (tamanho2 == 13) {
            pp = "meio corno😬";
          } else if (tamanho2 == 14) {
            pp = "muito corno😳";
          } else if (tamanho2 == 15) {
            pp = "cuidado com o poste";
          } else if (tamanho2 == 16) {
            pp = "vai pegar manga com esse chifre?";
          } else if (tamanho2 == 17) {
            pp = "eita poha, levou muita galha em😳";
          } else if (tamanho2 == 18) {
            pp = "cuidado com os fios de energia😳";
          } else if (tamanho2 == 19) {
            pp = "como você aguenta esse peso todo😳";
          } else if (tamanho2 == 20) {
            pp = "recorde de maior chifre, parabéns";
          } else if (tamanho2 == 21) {
            pp = "parabéns, belos chifres";
          } else if (tamanho2 == 22) {
            pp = "parabéns, belos chifres";
          } else if (tamanho2 == 23) {
            pp = "parabéns, belos chifres";
          } else if (tamanho2 == 24) {
            pp = "parabéns, belos chifres";
          } else if (tamanho2 > 25) {
            pp = "vai construir uma torre com isso?";
          }
          safira = `╭═════════════════ ⪩
╰╮ू ፝͜❥⃟💡𝐑𝐄𝐒𝐔𝐋𝐓𝐀𝐃𝐎 𝐃𝐎 𝐂𝐇𝐈𝐅𝐑𝐄👁⃟ू ፝͜❥
╭┤➢☃️ 「𝘖𝘓𝘈: ${pushname}」
╭┤➢🤟 「𝘚𝘌𝘜 𝘊𝘏𝘐𝘍𝘙𝘌 𝘛𝘌𝘔: ${random2}𝘊𝘔
╭┤➢✉️ 「${pp}」
┃╰══ ⪨
╰═════════════════ ⪨`;
          reply(safira);
          break;

        case "corno":
          if (!isGroup) return reply("so em grupo");
          if (!isJogos)
            return reply(
              `Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`,
            );
          Misax.sendMessage(from, {
            text: ` ❰ Pesquisando a ficha de corno : @${sender_ou_n.split("@")[0]}, aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            Misax.sendMessage(
              from,
              {
                image: { url: imgcorno },
                caption: ` O quanto você é corno? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  corno 🐃`,
                mentions: [sender_ou_n],
              },
              { quoted: selo },
            );
          }, 7000);
          break;

        case "vesgo":
          if (!isGroup) return reply("so em grupo");
          if (!isJogos)
            return reply(
              `Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`,
            );
          Misax.sendMessage(from, {
            text: `❰ Pesquisando a ficha de vesgo : @${sender_ou_n.split("@")[0]}, aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            Misax.sendMessage(
              from,
              {
                image: { url: imgvesgo },
                caption: `O quanto você é vesgo? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  Vesgo 🙄😆`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "bebado":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`,
            );
          Misax.sendMessage(from, {
            text: `❰ Pesquisando a ficha de bebado : @${sender_ou_n.split("@")[0]} , aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            Misax.sendMessage(
              from,
              {
                image: { url: imgbebado },
                caption: `O quanto você é bebado? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "gado":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `Este tipo de comando só pode ser utilizado com o modobrincadeira ativo, fale com um adm ou se você for, apenas digite ${prefix}modobrincadeira 1`,
            );
          Misax.sendMessage(from, {
            text: `❰ Pesquisando a ficha de gado : @${sender_ou_n.split("@")[0]}, aguarde... ❱`,
            mentions: [sender_ou_n],
          });
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            Misax.sendMessage(
              from,
              {
                image: { url: imggado },
                caption: `O quanto você é gado? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  gado 🐂`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "shipo": {
          //pk
          if (!menc_os2)
            return reply(
              "💖 *Marque alguém para descobrir se formam um casal perfeito!*",
            );

          const user1 = sender.split("@")[0];
          const user2 = menc_os2.split("@")[0];
          const porcentagem = Math.floor(Math.random() * 101);
          const frases = [
            "💔 Não rola, melhor só amizade...",
            "🤝 Combinação ok, mas ainda falta química!",
            "🔥 Alta tensão no ar! Pode dar namoro!",
            "💍 Perfeitos! Já pode casar hoje!",
            "💘 Um amor escrito nas estrelas!",
            "🌹 O cupido acertou em cheio!",
          ];
          let frase;
          if (porcentagem < 30) frase = frases[0];
          else if (porcentagem < 50) frase = frases[1];
          else if (porcentagem < 70) frase = frases[2];
          else if (porcentagem < 85) frase = frases[3];
          else if (porcentagem < 100) frase = frases[4];
          else frase = frases[5];

          const mensagem = `
╭━💞 *SHIPÔMETRO DO AMOR* 💞━╮
┃ 👤 @${user1}
┃ 💘 @${user2}
┃ 
┃ 💌 Compatibilidade: *${porcentagem}%*
┃ 💭 ${frase}
╰━━━━━━━━━━━━━━━━━━━━━━━╯`.trim();

          mentions(mensagem, [sender, menc_os2], true);
          break;
        }

        case "eununca": {
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          reagir(from, "🙈");
          const pergunta_ = JSON.parse(
            fs.readFileSync("./MISA-BANKER/json/eununca.json"),
          );
          const getRandomINever =
            pergunta_[Math.floor(Math.random() * pergunta_.length)];
          sendPoll(client, from, getRandomINever, ["Eu nunca", "Eu já"]).catch(
            console.error,
          );
          break;
        }

        case "verdadeoudesafio":
        case "vdd-dsf":
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          try {
            const escolha = args[0];
            if (!escolha || (escolha !== "verdade" && escolha !== "desafio")) {
              return reply("Escolha 'verdade' ou 'desafio' para jogar!");
            }
            const verdades = [
              "Verdade: Qual é o maior segredo que você já escondeu de seus amigos?",
              "Verdade: Qual foi a coisa mais vergonhosa que você já fez?",
              "Verdade: Se você pudesse mudar uma coisa em sua vida, o que seria?",
              "Verdade: Já teve um crush em alguém do grupo?",
              "Verdade: Qual a última vez que você mentiu e para quem?",
              "Verdade: Qual é a sua maior insegurança?",
              "Verdade: O que você mais tem medo de acontecer na sua vida?",
              "Verdade: Qual o maior arrependimento da sua vida?",
              "Verdade: Se você pudesse trocar de vida com alguém por 24 horas, quem seria?",
              "Verdade: Qual a coisa mais estranha que você já fez em público?",
            ];
            const desafiosPesados = [
              "Desafio: Fique 1 minuto de pé com uma perna só! Você consegue?",
              "Desafio: Beba um copo de água gelada enquanto segura o ar por 10 segundos!",
              "Desafio: Coloque o pé na sua cabeça e fique assim por 30 segundos!",
              "Desafio: Fique 2 minutos fazendo caretas enquanto segura a respiração!",
              'Desafio: Diga "Eu sou o mestre do universo" em voz alta 5 vezes seguidas!',
              "Desafio: Balançar sua cabeça de um lado para o outro por 1 minuto, sem parar!",
              "Desafio: Fala para seu 5° contato que vc e gay",
              "Desafio: Imite o som de um animal aleatório (galo, vaca, porquinho, etc.) por 30 segundos!",
              "Desafio: Faça 50 abdominais em menos de 1 minuto!",
              'Desafio: Faça um "selfie" com a expressão mais feia que conseguir e envie para o grupo!',
              "Desafio: Segure o ar por 10 segundos! Você consegue?",
              "Desafio: Fique 30 segundos sem rir! Vai conseguir?",
              "Desafio: Tente fazer 10 flexões sem parar!",
              'Desafio: Diga a palavra "paralelepípedo" 5 vezes sem errar!',
              "Desafio: Tente ficar 10 segundos olhando para a tela sem piscar!",
              "Desafio: Faça uma careta bem feia e mantenha por 10 segundos!",
              "Desafio: Diga seu nome ao contrário 3 vezes!",
              'Desafio: Tente adivinhar o enigma: "O que é, o que é? Tem cabeça, mas não tem corpo!"',
              "Desafio: Faça 20 pulos no lugar! Vai encarar?",
              "Desafio: Tente tocar o seu nariz com a língua!",
            ];
            if (escolha === "verdade") {
              const verdadeSelecionada =
                verdades[Math.floor(Math.random() * verdades.length)];
              reply(`💬 *VERDADE* 💬\n${verdadeSelecionada}`);
            } else if (escolha === "desafio") {
              const desafioPesadoSelecionado =
                desafiosPesados[
                  Math.floor(Math.random() * desafiosPesados.length)
                ];
              const imagemUrl = "https://imgur.com/YbaVUbz";
              const dptr = `🔥 *DESAFIO PESADO* 🔥\n${desafioPesadoSelecionado}\n`;
              reply(`${dptr}`);
            }
          } catch (e) {
            reply(
              "Houve um erro ao processar seu pedido. Tente novamente mais tarde.",
            );
          }
          break;

        case "salario": //jp
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          try {
            const salarios = [
              {
                profissao: "Desenvolvedor de Software",
                salario: "R$ 8.000,00",
              },
              { profissao: "Designer Gráfico", salario: "R$ 3.500,00" },
              { profissao: "Médico", salario: "R$ 12.000,00" },
              {
                profissao: "Professor de Ensino Médio",
                salario: "R$ 2.800,00",
              },
              { profissao: "Engenheiro Civil", salario: "R$ 7.500,00" },
              { profissao: "Advogado", salario: "R$ 6.000,00" },
              { profissao: "Dentista", salario: "R$ 9.000,00" },
              { profissao: "Arquiteto", salario: "R$ 5.500,00" },
              { profissao: "Gerente de Marketing", salario: "R$ 10.000,00" },
              { profissao: "Analista de Sistemas", salario: "R$ 4.500,00" },
              { profissao: "Enfermeiro", salario: "R$ 4.000,00" },
              { profissao: "Jornalista", salario: "R$ 3.200,00" },
              { profissao: "Motorista de Caminhão", salario: "R$ 3.000,00" },
              { profissao: "Chef de Cozinha", salario: "R$ 5.000,00" },
              { profissao: "Cabeleireiro", salario: "R$ 2.500,00" },
              { profissao: "Fisioterapeuta", salario: "R$ 4.200,00" },
              { profissao: "Psicólogo", salario: "R$ 4.500,00" },
              { profissao: "Analista de Marketing", salario: "R$ 5.000,00" },
              {
                profissao: "Assistente Administrativo",
                salario: "R$ 2.200,00",
              },
              { profissao: "Recepcionista", salario: "R$ 1.800,00" },
              { profissao: "Estilista", salario: "R$ 3.800,00" },
              { profissao: "Professor Universitário", salario: "R$ 6.500,00" },
              { profissao: "Veterinário", salario: "R$ 7.000,00" },
              { profissao: "Fotógrafo", salario: "R$ 3.200,00" },
              { profissao: "Técnico de Informática", salario: "R$ 2.800,00" },
              { profissao: "Chef de Pâtisserie", salario: "R$ 4.500,00" },
              { profissao: "Arqueólogo", salario: "R$ 4.000,00" },
              { profissao: "Redator Publicitário", salario: "R$ 3.000,00" },
              { profissao: "Sargento", salario: "R$ 4.000,00" },
              { profissao: "Engenheiro de Software", salario: "R$ 8.500,00" },
              { profissao: "Consultor de TI", salario: "R$ 6.000,00" },
              { profissao: "Corretor de Imóveis", salario: "R$ 3.500,00" },
              { profissao: "Guias de Turismo", salario: "R$ 2.500,00" },
              { profissao: "Lixeiro", salario: "R$ 1.800,00" },
              { profissao: "Encanador", salario: "R$ 3.000,00" },
              { profissao: "Pedreiro", salario: "R$ 2.800,00" },
              {
                profissao: "Consultor de Recursos Humanos",
                salario: "R$ 5.000,00",
              },
              { profissao: "Gestor de Projetos", salario: "R$ 7.000,00" },
              { profissao: "Auditor Fiscal", salario: "R$ 9.000,00" },
              { profissao: "Especialista em SEO", salario: "R$ 4.800,00" },
              { profissao: "Técnico em Enfermagem", salario: "R$ 2.800,00" },
              { profissao: "Dublador", salario: "R$ 3.000,00" },
              {
                profissao: "Analista de Segurança da Informação",
                salario: "R$ 7.000,00",
              },
              { profissao: "Analista Financeiro", salario: "R$ 4.500,00" },
              { profissao: "Gestor de TI", salario: "R$ 8.000,00" },
              { profissao: "Desenhista Industrial", salario: "R$ 4.000,00" },
              {
                profissao: "Técnico de Segurança do Trabalho",
                salario: "R$ 4.200,00",
              },
              { profissao: "Padeiro", salario: "R$ 2.400,00" },
              { profissao: "Zelador", salario: "R$ 2.000,00" },
              { profissao: "Contador", salario: "R$ 5.500,00" },
              { profissao: "Analista de Dados", salario: "R$ 6.500,00" },
              { profissao: "Designer de Interiores", salario: "R$ 4.000,00" },
              { profissao: "Programador", salario: "R$ 6.500,00" },
              { profissao: "Operador de Máquinas", salario: "R$ 2.800,00" },
              { profissao: "Consultor de Imagem", salario: "R$ 4.200,00" },
              { profissao: "Agente de Viagens", salario: "R$ 2.500,00" },
              { profissao: "Arqueólogo", salario: "R$ 4.000,00" },
              { profissao: "Pesquisador", salario: "R$ 5.000,00" },
            ];

            const profissaoEscolhida =
              salarios[Math.floor(Math.random() * salarios.length)]; // Escolhendo uma profissão aleatória

            const mensagem = `
💼 *SALÁRIO E PROFISSÃO* 💰
━━━━━━━━━━━━━━━
📌 *Profissão:* ${profissaoEscolhida.profissao}
💵 *Salário:* ${profissaoEscolhida.salario}
━━━━━━━━━━━━━━━
🤔 *Vai virar pobre ou rico?* 💸
        `;
            reply(mensagem);
          } catch (error) {
            console.error(error);
            reply("❌ *Erro ao calcular o salário, tente novamente!* ❌");
          }
          break;

        case "sigma":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de sigma @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: imgsigma },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa sigma?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "beta":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de beta @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: imgbeta },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um beta?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "baiano":
          if (!isGroup) return reply(mmsg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de baiano @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: imgbaiano },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "baiana":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de baiana @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: imgbaiana },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa baiana?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "carioca":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de carioca @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: imgcarioca },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa carioca?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: selo },
            );
          }, 7000);
          break;

        case "louco":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de louco @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: imglouco },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "louca":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de louca @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: imglouca },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa louca?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: selo },
            );
          }, 7000);
          break;

        case "safada":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de safada @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: imgsafada },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "safado":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de safado @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: imgsafado },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma pessoa safada?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "macaco":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de macaco @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: imgmacaco },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser um macaco?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "macaca":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de macaca @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: imgmacaca },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma macaca?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "puta":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a sua ficha de puta @${sender_ou_n.split("@")[0]} aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: imgputa },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser uma puta?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloMeta },
            );
          }, 7000);
          break;

        case "casal":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await reagir(from, "💘");
          var m1 =
            groupMembers[Math.floor(Math.random() * groupMembers.length)].id;
          var m2 =
            groupMembers[Math.floor(Math.random() * groupMembers.length)].id;
          try {
            ppimg = await yuta.profilePictureUrl(m1);
          } catch (erro) {
            ppimg = "https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg";
          }
          try {
            ppimg2 = await yuta.profilePictureUrl(m2);
          } catch (erro) {
            ppimg2 = "https://telegra.ph/file/2fbfa46b4ea3baed434d1.jpg";
          }
          p1 = await axios.get(
            `https://tinyurl.com/api-create.php?url=${ppimg}`,
          );
          p2 = await axios.get(
            `https://tinyurl.com/api-create.php?url=${ppimg2}`,
          );
          random = Math.floor(Math.random() * 100);
          await Misax.sendMessage(
            from,
            {
              image: { url: `https://files.catbox.moe/gosmx9.jpg` },
              caption: `『👩🏼‍❤️‍💋‍👨🏻』- 𝐒𝐈𝐍𝐓𝐎 𝐐𝐔𝐄 𝐄𝐒𝐒𝐄𝐒 𝐃𝐎𝐈𝐒 𝐅𝐎𝐑𝐌𝐀𝐑𝐈𝐀 𝐔𝐌 𝐎𝐓𝐈𝐌𝐎 𝐂𝐀𝐒𝐀𝐋:\n\n『@${m1.split("@")[0]}』\n\n『@${m2.split("@")[0]}』\n\n𝐂𝐎𝐌 𝐔𝐌𝐀 𝐄𝐒𝐏𝐄𝐂𝐓𝐀𝐓𝐈𝐕𝐀 𝐃𝐄:*『${random + "%"}』*`,
              mentions: [m1, m2],
            },
            { quoted: selo },
          ).catch((error) => {
            reply(mess.error());
          });
          break;

        case "gozar":
        case "goza": //by tzn pau de me
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          reagir(from, "😈");
          const gozars = [
            "Você acabou de gozar na boca do(a)",
            "Você acabou de gozar no cuzinho do(a)",
            "Você acabou de gozar na bucetinha do(a)",
            "Você acabou de gozar no pé do(a)",
            "Você acabou de gozar na cabeça do(a)",
            "Você acabou de gozar na cara do(a)",
            "Você acabou de gozar na barriga do(a)",
            "Você acabou de gozar no olho do(a)",
            "Você acabou de gozar na útero do(a)",
            "Você acabou de gozar no cabelo do(a)",
            "Você acabou de gozar na boca do(a)",
            "Você acabou de gozar no umbigo do(a)",
            "Você acabou de gozar nas costas do(a)",
            "Você acabou de gozar nos braços do(a)",
            "Você acabou de gozar na mão do(a)",
          ];
          const gozacao = gozars[Math.floor(Math.random() * gozars.length)];
          if (!isGroup) return reply("*sᴏᴍᴇɴᴛᴇ ᴇᴍ ɢʀᴜᴘᴏs 🙇‍♂️*"); //tzn modalidades esportivas
          if (!menc_os2 || menc_jid2[1])
            return reply("*ᴍᴀʀǫᴜᴇ ᴀ ᴘᴇssᴏᴀ ǫᴜᴇ ᴠᴏᴄᴇ ǫᴜᴇʀ ɢᴏᴢᴀʀ 🙈*");
          Misax.sendMessage(
            from,
            {
              video: {
                url: `https://telegra.ph/file/8a82de1e9da332773f52c.mp4`,
              },
              gifPlayback: true,
              caption: `${gozacao} @${menc_os2.split("@")[0]} 🥵
`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "fiel":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a ficha de fiel @${sender_ou_n.split("@")[0]}, aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: `https://files.catbox.moe/hwbqmt.webp` },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser fiel?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "lindo":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a ficha de lindo @${sender_ou_n.split("@")[0]}, aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: seloNubank },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: `https://files.catbox.moe/2r420g.jpg` },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser lindo?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "linda":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando a ficha de linda @${sender_ou_n.split("@")[0]}, aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: selo },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: `https://files.catbox.moe/yb6hpe.jpg` },
                caption: `O quanto *@${sender_ou_n.split("@")[0]}* pode ser linda?\n• A porcentagem de chance é *${random}%*`,
                mentions: [sender_ou_n],
              },
              { quoted: seloNubank },
            );
          }, 7000);
          break;

        case "tirarft":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque o alvo que você quer tirar a foto, a mensagem ou o @.",
            );
          await Misax.sendMessage(
            from,
            {
              video: {
                url: `https://telegra.ph/file/7193308e3949803132bad.mp4`,
              },
              gifPlayback: true,
              caption: `Você acabou de tirar uma foto do(a) *@${menc_os2.split("@")[0]}*`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "estuprar":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque a pessoa que você quer comer a força, a mensagem ou o @",
            );
          await Misax.sendMessage(
            from,
            {
              video: { url: `https://files.catbox.moe/kusu1d.mp4` },
              gifPlayback: true,
              caption: `Ta prr 🔥 *@${menc_os2.split("@")[0]}* Você foi estuprado 😰`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "boquete":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque a pessoa que você quer botar pra mamar, a mensagem ou o @",
            );
          await Misax.sendMessage(
            from,
            {
              video: { url: `https://files.catbox.moe/4hvf79.mp4` },
              gifPlayback: true,
              caption: `Eita *@${menc_os2.split("@")[0]}* garganta profunda voce tem 😰`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "cagar":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque a pessoa que você quer botar pra cagar, a mensagem ou o @",
            );
          await Misax.sendMessage(
            from,
            {
              video: { url: `https://files.catbox.moe/662vzj.mp4` },
              gifPlayback: true,
              caption: `CARALHOOOOO *@${menc_os2.split("@")[0]}* FAMOSO CAGA TRONCO KAKAKAKAK??? 🤯😳`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "cu":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          await Misax.sendMessage(
            from,
            {
              text: `Pesquisando quantos cm de profundidade tem seu bozo @${sender_ou_n.split("@")[0]}, aguarde...`,
              mentions: [sender_ou_n],
            },
            { quoted: selo },
          );
          setTimeout(async () => {
            random = `${Math.floor(Math.random() * 110)}`;
            await Misax.sendMessage(
              from,
              {
                image: { url: `https://files.catbox.moe/x8k6en.jpg` },
                caption: `Quantos cm o(a) *@${sender_ou_n.split("@")[0]}* 
tem no bozo ?\n• A chance é de *${random}cm* 😳`,
                mentions: [sender_ou_n],
              },
              { quoted: selo },
            );
          }, 7000);
          break;

        case "abraco":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque o alvo que você quer dar um abraço, a mensagem ou o @.",
            );
          await Misax.sendMessage(
            from,
            {
              video: { url: `https://files.catbox.moe/ecw188.mp4` },
              gifPlayback: true,
              caption: `Você acabou de dar um abraço fofo no(a) *@${menc_os2.split("@")[0]}*`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "morder":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque o alvo que você quer dar uma mordida, a mensagem ou o @.",
            );
          await Misax.sendMessage(
            from,
            {
              video: {
                url: `https://telegra.ph/file/75e4c0273be625a2363ce.mp4`,
              },
              gifPlayback: true,
              caption: `Você acabou de dar uma mordida no(a) *@${menc_os2.split("@")[0]}*`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "sentar":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque o alvo que você quer dar uma sentadinha, a mensagem ou o @.",
            );
          await Misax.sendMessage(
            from,
            {
              video: {
                url: `https://telegra.ph/file/d695e05443043ff9a254d.mp4`,
              },
              gifPlayback: true,
              caption: `Você acabou de dar uma sentadinha no(a) *@${menc_os2.split("@")[0]}*`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "capinarlote":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque o alvo que você quer botar pra capinar um lote, a mensagem ou o @.",
            );
          await Misax.sendMessage(
            from,
            {
              video: {
                url: `https://telegra.ph/file/4682c1b474ce5dee3a48d.mp4`,
              },
              gifPlayback: true,
              caption: `Você acabou de botar o(a) *@${menc_os2.split("@")[0]}* pra capinar um lote`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "pgpeito":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque o alvo que você quer pegar nos peitinhos, a mensagem ou o @.",
            );
          await Misax.sendMessage(
            from,
            {
              video: {
                url: `https://telegra.ph/file/52d46e2c58318b8cfcacc.mp4`,
              },
              gifPlayback: true,
              caption: `Você acabou de pegar nos peitos do(a) *@${menc_os2.split("@")[0]}*`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "pgpau":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque o alvo que você quer pegar no pau dele(a), a mensagem ou o @.",
            );
          await Misax.sendMessage(
            from,
            {
              video: {
                url: `https://telegra.ph/file/5073ba8be6b099ed812a7.mp4`,
              },
              gifPlayback: true,
              caption: `Você acabou de pegar no pau do(a) *@${menc_os2.split("@")[0]}*`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        case "pgbunda":
          if (!isGroup) return reply(msg.grupo);
          if (!isJogos)
            return reply(
              `O modo brincadeira está desativado. Se você for adm, use ${prefix}modobrincadeiras 1 ou chame um adm.`,
            );
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque o alvo que desejas ser acariciado, a mensagem ou o @.",
            );
          await Misax.sendMessage(
            from,
            {
              video: {
                url: `https://telegra.ph/file/e62de1e6863c59d284b2e.mp4`,
              },
              gifPlayback: true,
              caption: `Você acabou de pegar na bunda do(a) *@${menc_os2.split("@")[0]}*`,
              mentions: [menc_os2],
            },
            { quoted: seloNubank },
          );
          break;

        // 💜 FIM DOS COMANDOS DE BRINCADEIRAS 💜

        // 💜 COMEÇO DO COMANDO DE RPG 💜 TOTAL DE COMANDO 14
        case "lojarpg":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            enviar(`🛒 *Loja de Itens*
💊 poção — 20 ouro (cura +30 HP)
⚔️ espada — 100 ouro (aumenta ataque +5)
🌽 ração — 10 ouro (dobra ovos na próxima coleta)

Use: ${prefix}comprar poção`);
          }
          break;

        case "inventario":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            const player = getJogador(sender);
            const inv = player.inventario || {};
            const lista =
              Object.entries(inv)
                .map(([item, qtd]) => `- ${item}: ${qtd}`)
                .join("\n") || "Vazio";
            enviar(`🎒 *Seu Inventário:*\n${lista}`);
          }
          break;

        case "usar":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            const item = args[0]?.toLowerCase();
            if (!item)
              return enviar(`❓ Qual item usar?\npocão, ração ou espada?`);

            atualizarJogador(sender, (player) => {
              const inv = player.inventario || {};
              if (!inv[item] || inv[item] <= 0)
                return enviar(`❌ Você não tem esse item.`);

              inv[item]--;

              switch (item) {
                case "poção":
                  if (!isSabCityOFF)
                    return reply(
                      "modo rpg precisa estar ativo\n> use modorpg 1",
                    );
                  player.hp = Math.min(player.maxHp, player.hp + 30);
                  enviar(
                    `💉 Você usou uma poção. Vida: ${player.hp}/${player.maxHp}`,
                  );
                  break;
                case "espada":
                  if (!isSabCityOFF)
                    return reply(
                      "modo rpg precisa estar ativo\n> use modorpg 1",
                    );
                  player.ataque += 5;
                  enviar(
                    `⚔️ Você equipou uma espada. Ataque atual: ${player.ataque}`,
                  );
                  break;
                case "ração":
                  if (!isSabCityOFF)
                    return reply(
                      "modo rpg precisa estar ativo\n> use modorpg 1",
                    );
                  player.buffs = player.buffs || {};
                  player.buffs.racaoDupla = true;
                  enviar(
                    `🌽 Suas galinhas vão produzir ovos em dobro na próxima coleta.`,
                  );
                  break;
              }
            });
          }
          break;

        case "curar":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            atualizarJogador(sender, (player) => {
              if (player.ouro < 10)
                return enviar("❌ Você precisa de 10 ouro para se curar.");
              player.ouro -= 10;
              player.hp = player.maxHp;
              enviar(`💉 Você foi curado completamente!`);
            });
          }
          break;

        case "criarfamilia": //by: Yuki Modz
          if (!isSabCityOFF)
            return reply("modo rpg precisa estar ativo\n> use modorpg 1");
          const nomeFamilia = args.join(" ");
          if (!nomeFamilia)
            return reply("Por favor, forneça um nome para a família.");
          const criarFamiliaMsg = criarFamilia(sender, nomeFamilia);
          reply(criarFamiliaMsg);
          break;

        case "vertodasfamilia": //By: Yuki Modz
          if (!isSabCityOFF)
            return reply("modo rpg precisa estar ativo\n> use modorpg 1");
          const verTodasFamiliasMsg = verTodasFamilias();
          reply(verTodasFamiliasMsg, null, {
            contextInfo: {
              mentionedJid: loadFamilias().familias.flatMap((f) => f.membros),
            },
          });
          break;

        case "adicionarfamilia": //By: Yuki Modz
        case "addfamilia":
          if (!isSabCityOFF)
            return reply("modo rpg precisa estar ativo\n> use modorpg 1");
          if (!menc_os2 || menc_jid2[1]) return reply("❕Marque a pessoa");
          if (!menc_os2)
            return reply(
              "Por favor, mencione um membro para adicionar à família.",
            );
          const adicionarFamiliaMsg = adicionarFamilia(sender, menc_os2);
          reply(adicionarFamiliaMsg);
          break;

        case "sairfamilia": //By Yuki Modz
          if (!isSabCityOFF)
            return reply("modo rpg precisa estar ativo\n> use modorpg 1");
          const sairFamiliaMsg = sairFamilia(sender);
          reply(sairFamiliaMsg);
          break;

        case "verfamilia": //By: Yuki Modz
          if (!isSabCityOFF)
            return reply("modo rpg precisa estar ativo\n> use modorpg 1");
          const verFamiliaMsg = verFamilia(sender);
          reply(verFamiliaMsg, null, {
            contextInfo: {
              mentionedJid: loadFamilias().familias.find((f) =>
                f.membros.includes(sender),
              ).membros,
            },
          });
          break;

        case "cacar":
        case "caçar":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            atualizarJogador(sender, (player) => {
              if (player.hp <= 0)
                return enviar(
                  "⚠️ Você está sem vida! Use *curar* para continuar.",
                );

              const dano = Math.floor(Math.random() * 20 + 5);
              const xp = Math.floor(Math.random() * 10 + 5);
              const ouro = Math.floor(Math.random() * 15 + 5);
              const danoRecebido = Math.floor(Math.random() * 15 + 5);

              player.xp += xp;
              player.ouro += ouro;
              player.hp -= danoRecebido;
              if (player.hp < 0) player.hp = 0;

              const xpUp = player.nivel * 50;
              if (player.xp >= xpUp) {
                player.nivel++;
                player.xp = 0;
                player.maxHp += 20;
                player.hp = player.maxHp;
                player.ataque += 5;
                enviar(
                  `✨ *Parabéns!* Você subiu para o nível ${player.nivel}!`,
                );
              }

              enviar(
                `🗡️ Você enfrentou um monstro!\n\nVocê causou ${dano} de dano.\nRecebeu ${danoRecebido} de dano.\n💰 Ganhou ${ouro} de ouro.\n⭐ XP ganho: ${xp}\n❤️ Vida: ${player.hp}/${player.maxHp}`,
              );
            });
          }
          break;

        case "plantar":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            const tipo = args[0]?.toLowerCase();
            if (!tipo || !["rosa", "girassol"].includes(tipo)) {
              return enviar(`🌻 Uso: ${prefix}plantar rosa | girassol`);
            }
            atualizarJogador(sender, (player) => {
              player.plantas[tipo] = (player.plantas[tipo] || 0) + 1;
              enviar(
                `🌱 Você plantou semente de ${tipo}! Total: ${player.plantas[tipo]}`,
              );
            });
          }
          break;

        case "comprar-animal":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            const tipo = args[0]?.toLowerCase();
            const preco = { galinha: 30, vaca: 100 };

            if (!tipo || !preco[tipo]) {
              return enviar(`🐔 Uso: ${prefix}comprar-animal galinha | vaca`);
            }

            atualizarJogador(sender, (player) => {
              if (player.ouro < preco[tipo]) {
                return enviar(
                  `💰 Você precisa de ${preco[tipo]} ouro para comprar uma ${tipo}`,
                );
              }
              player.ouro -= preco[tipo];
              player.animais[tipo].qtd += 1;
              enviar(
                `🐾 Você comprou uma ${tipo}! Total: ${player.animais[tipo].qtd}`,
              );
            });
          }
          break;

        case "coletar":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            atualizarJogador(sender, (player) => {
              let ovos = Math.floor(
                player.animais.galinha.qtd * Math.random() * 3,
              );
              player.animais.galinha.ovos += ovos;
              let dinheiro = ovos * 2;
              player.ouro += dinheiro;
              enviar(
                `🥚 Suas galinhas botaram ${ovos} ovos.\n💰 Você vendeu por ${dinheiro} de ouro.`,
              );
            });
          }
          break;

        case "criar-filhote":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            const tipo = args[0]?.toLowerCase();
            if (!["galinha", "vaca"].includes(tipo)) {
              return enviar(`👶 Uso: ${prefix}criar-filhote galinha | vaca`);
            }
            atualizarJogador(sender, (player) => {
              const pais = player.animais[tipo].qtd;
              if (pais < 2)
                return enviar(
                  `⚠️ Você precisa de pelo menos 2 ${tipo}s para gerar filhotes.`,
                );
              const filhotes = Math.floor(Math.random() * 2 + 1);
              player.animais[tipo].filhotes += filhotes;
              player.animais[tipo].qtd += filhotes;
              enviar(`🎉 Nasceram ${filhotes} filhotes de ${tipo}!`);
            });
          }
          break;

        case "fazenda":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            const player = getJogador(sender);
            enviar(
              `🌾 *Sua Fazenda*\n\n🌻 Plantas:\n- Rosa: ${player.plantas.rosa}\n- Girassol: ${player.plantas.girassol}\n\n🐔 Animais:\n- Galinhas: ${player.animais.galinha.qtd} (Ovos: ${player.animais.galinha.ovos})\n- Vacas: ${player.animais.vaca.qtd}\n\n💰 Ouro: ${player.ouro}`,
            );
          }
          break;

        case "statusrpg":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            const player = getJogador(sender);
            const xpNecessario = player.nivel * 50;
            enviar(
              `📜 *Status de ${player.nome}*\n\n🏅 Nível: ${player.nivel}\n⭐ XP: ${player.xp}/${xpNecessario}\n❤️ Vida: ${player.hp}/${player.maxHp}\n⚔️ Ataque: ${player.ataque}\n💰 Ouro: ${player.ouro}`,
            );
          }
          break;

        case "missao":
        case "missão":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            const missoes = [
              "🌿 Plante 3 girassóis",
              "🗡️ Cace 2 monstros",
              "🥚 Colete 5 ovos",
            ];
            const r = missoes[Math.floor(Math.random() * missoes.length)];
            enviar(`📜 Missão de hoje:\n${r}`);
          }
          break;

        case "chavepix":
          if (!isGroup) return reply(msg.grupo);
          if (!isSabCityOFF)
            return reply(
              `É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`,
            );
          if (!JSON.stringify(sabrpg).includes(sender))
            return reply(
              `${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`,
            );
          if (!JSON.stringify(sabrpg).includes(menc_os2))
            return Misax.sendMessage(
              from,
              {
                text: `Usuário (a) @${menc_os2.split("@")[0]} não consta em nosso banco...`,
                mentions: [menc_os2],
              },
              { quoted: seloNubank },
            );
          AB = sabrpg.map((i) => i.id).indexOf(sender);
          reply(
            `Chave encontrada/localizada! 🌟🧾\n• Nome: *${sabrpg[AB].nome}*\n• Chave: *${sabrpg[AB].id.split("@")[0]}*`,
          );
          break;

        case "comprar":
          {
            if (!isSabCityOFF)
              return reply("modo rpg precisa estar ativo\n> use modorpg 1");
            const item = args[0]?.toLowerCase();
            const loja = {
              poção: 20,
              espada: 100,
              ração: 10,
            };

            if (!item || !loja[item])
              return enviar(`❌ Item não disponível na loja.`);

            atualizarJogador(sender, (player) => {
              if (player.ouro < loja[item])
                return enviar(
                  `💰 Você precisa de ${loja[item]} ouro para comprar ${item}.`,
                );
              player.ouro -= loja[item];
              player.inventario = player.inventario || {};
              player.inventario[item] = (player.inventario[item] || 0) + 1;
              enviar(`✅ Você comprou ${item}!`);
            });
          }
          break;

        case "minhacarteira":
        case "carteira":
        case "meubanco":
        case "saldo":
          if (!isSabCityOFF) return reply(`Olá, o modo RPG não esta ativo`);
          if (!JSON.stringify(sabrpg).includes(sender))
            return reply(
              `${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`,
            );
          AB = sabrpg.map((i) => i.id).indexOf(sender);
          dindin = Number(sabrpg[AB].money).toFixed(2);
          if (dindin < 10) {
            var bctxt = `0${dindin}`;
          } else {
            var bctxt = dindin;
          }
          caixa = [];
          for (i = 0; i < sabrpg.length; i++) {
            caixa.push({ idnmr: sabrpg[i].id, nmr: i + 1 });
          }
          enc = caixa.map((b) => b.idnmr).indexOf(sender);
          if (Number(caixa[enc].nmr) < 100) {
            if (Number(caixa[enc].nmr) < 10) {
              page = `00` + caixa[enc].nmr;
            } else {
              page = `0` + caixa[enc].nmr;
            }
          } else {
            page = caixa[enc].nmr;
          }
          myid = sabrpg[AB].id.split("@")[0].slice(5);
          txt = `Olá *${sabrpg[AB].nome}*, tudo bem? Aqui está a sua solicitação:\n—\n• [💵] *Informações Bancárias*\n• Seu banco atual: *${sabrpg[AB].namebank}*\n• Você está atualmente com *R$ ${bctxt}* em sua carteira para uso.\n–\n• [🧾] *Informações de Registro*\n• Seu ID: *R${sabrpg[AB].id.split(myid)[0]}GP${myid}BC*\n• Você realizou o registro na _Sab's City_ às *${sabrpg[AB].hrg} hora(s)* no dia *${sabrpg[AB].drg}*.\n–\n• [📖] *Livro de Registro*\n_Com base em meu livro de registros_, você foi registrado na página: *${page}*`;
          reply(txt);
          break;
          break;

        case "trabalhar":
          if (!isGroup) return reply(msg.grupo);
          if (!isSabCityOFF)
            return reply(
              `É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`,
            );
          if (!JSON.stringify(sabrpg).includes(sender))
            return reply(
              `usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`,
            );
          horaT = moment.tz("America/Sao_Paulo").format("HH");
          dataT = moment.tz("America/Sao_Paulo").format("DD");
          data2T = moment.tz("America/Sao_Paulo").format("MM");
          AB = sabrpg.map((i) => i.id).indexOf(sender);
          if (
            Number(sabrpg[AB].limiteTh) === 0 &&
            Number(sabrpg[AB].limiteTd) > 0 &&
            Number(sabrpg[AB].hrT) === Number(horaT)
          )
            return reply(`Você já trabalhou agora... Volte na próxima hora.`);
          //trabalho normal...
          if (
            Number(sabrpg[AB].limiteTh) > 0 &&
            Number(sabrpg[AB].hrT) === Number(horaT) &&
            Number(sabrpg[AB].diaT) === Number(dataT) &&
            Number(sabrpg[AB].mT) === Number(data2T)
          ) {
            TBALE = Math.floor(Math.random() * 50) + 40;
            TBLH = Number(sabrpg[AB].money) + Number(TBALE);
            HT = sabrpg[AB].limiteTh - 1;
            TD = sabrpg[AB].limiteTd - 1;
            sabrpg[AB].money = TBLH;
            sabrpg[AB].money = TBLH;
            sabrpg[AB].money = TBLH;
            sabrpg[AB].limiteTh = HT;
            sabrpg[AB].limiteTd = TD;
            fs.writeFileSync(
              "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
              JSON.stringify(sabrpg),
            );
            reply(
              `Parabéns ${sabrpg[AB].nome}, você trabalhou e ganhou *R$ ${Number(TBALE).toFixed(2)}* até depois!🫡`,
            );
          }
          HTR = sabrpg[AB].hrT + 1;
          //passar para a próxima hora...
          if (
            Number(horaT) > Number(sabrpg[AB].hrT) &&
            Number(sabrpg[AB].limiteTd) > 0 &&
            Number(sabrpg[AB].diaT) === Number(dataT) &&
            Number(sabrpg[AB].mT) == Number(data2T)
          ) {
            sabrpg[AB].limiteTh = 3;
            sabrpg[AB].hrT = horaT;
            fs.writeFileSync(
              "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
              JSON.stringify(sabrpg),
            );
            reply(
              `Já tá pronto pra trabalhar dnv? Digite o comando novamente enquanto eu preparo suas coisas...`,
            );
          }
          if (
            Number(sabrpg[AB].limiteTd) < 1 &&
            Number(sabrpg[AB].diaT) === Number(dataT)
          )
            return reply(`Você já trabalhou muito por hoje... Volte amanhã!`);
          //passar para o outro dia...
          if (
            Number(dataT) > Number(sabrpg[AB].diaT) &&
            Number(sabrpg[AB].mT) == Number(data2T)
          ) {
            sabrpg[AB].limiteTh = 3;
            sabrpg[AB].limiteTd = 24;
            sabrpg[AB].hrT = horaT;
            sabrpg[AB].diaT = dataT;
            fs.writeFileSync(
              "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
              JSON.stringify(sabrpg),
            );
            reply(` usuário (a), está pronto para trabalhar?`);
          }
          //passar para o próximo mês...
          if (Number(data2T) > Number(sabrpg[AB].mT)) {
            sabrpg[AB].limiteTh = 3;
            sabrpg[AB].limiteTd = 24;
            sabrpg[AB].hrT = horaT;
            sabrpg[AB].diaT = dataT;
            sabrpg[AB].mT = data2T;
            fs.writeFileSync(
              "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
              JSON.stringify(sabrpg),
            );
            reply(`usuário (a), está pronto para iniciar o mês?`);
          }
          break;

        case "minerar":
          if (!isGroup) return reply(enviar.msg.grupo);
          if (!isSabCityOFF)
            return reply(
              `É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`,
            );
          if (!isSabCityOFF) return reply(mess.warningMB(prefix));
          if (!JSON.stringify(sabrpg).includes(sender))
            return reply(
              `${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na  City.`,
            );
          minu = moment.tz("America/Sao_Paulo").format("mm");
          if (!JSON.stringify(minerar).includes(sender)) {
            minerar.push({ id: sender, minuto: minu });
            fs.writeFileSync(
              "./MISA-BANKER/usuarios/misarpg/minerar.json",
              JSON.stringify(minerar),
            );
          }
          AC = minerar.map((i) => i.id).indexOf(sender);
          if (Number(minerar[AC].minuto) !== Number(minu)) {
            minerar[AC].minuto = minu;
            fs.writeFileSync(
              "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
              JSON.stringify(sabrpg),
            );
            MINERAR_G = Math.floor(Math.random() * 100);
            reply(
              `- Iniciando mineração! Aguarde *5s* para obter o resultado...`,
            );
            if (Number(MINERAR_G) > 15) {
              PD = [
                "nenhum mineral valioso",
                "nenhuma joia valiosa em sua busca",
                "nenhum diamante em sua caçada",
                "nenhum minério validoso",
                "nenhum cobre em sua caçada",
                "nada de redstone em sua caçada",
              ];
              txt = `😭 Em sua tentativa de mineração, não foi possível evidenciar ${PD[Math.floor(Math.random() * PD.length)]}...`;
            } else {
              MT = Math.floor(Math.random() * 2000);
              AB = sabrpg.map((i) => i.id).indexOf(sender);
              MA = sabrpg[AB].money;
              sabrpg[AB].money = Number(MA) + Number(MT);
              mineMessage = [
                `Você estava minerando nas ilhas savitas e encontrou em seu caminho *R$ ${Number(MT).toFixed(2)}* em minerais preciosos! 💰`,
                `🗣💰 Você invadiu uma mina proibida e quando estava fazendo a mineração achou *R$ ${Number(MT).toFixed(2)}* em troca de ouro!`,
                `💎👷🏻‍♀️ Você invadiu uma mina de diamantes proibida, enquanto você estava fazendo a mineração, encontrou 2 diamantes equivalentes à *R$ ${Number(MT).toFixed(2)}*.`,
                `⛏️👷🏻‍♀️ Você escavou uma mina de ouro subterrânea em Minas Gerais e encontrou *R$ ${Number(MT).toFixed(2)}*!`,
                `🛫 Em uma de suas viagens para o interior da Flórida, você embarcou uma busca ao tesouro perdido e encontrou em seu caminho um cordão de ouro perdido avaliado em *R$ ${Number(MT).toFixed(2)}*.`,
                `😱🌟 Você invadiu a casa do vizinho e encontrou *R$ ${Number(MT).toFixed(2)}* escavando o quintal dele.`,
                `⛏️👷🏻‍♀️✨️ Você acaba de invadir em uma mina de esmeraldas desconhecida e encontrou *R$ ${Number(MT).toFixed(2)}*`,
                `🛥️💰 Você encontrou nas profundezas do oceanos, um tesouro em um navio antigo equivalente à *R$ ${Number(MT).toFixed(2)}*.`,
                `🌟 Você foi chamado para trabalhar na mina e encontrou milhares de resíduos! Como recompensa, você acaba de ganhar *R$ ${Number(MT).toFixed(2)}*. 😸`,
                `Você foi chamado para trabalhar na mina e encontrou muitos tesouros perdidos!👷🏼🌟 Como recompensa, você acaba de ganhar *R$ ${Number(MT).toFixed(2)}*.`,
              ];
              txt = mineMessage[Math.floor(Math.random() * mineMessage.length)];
            }
            setTimeout(() => {
              Misax.sendMessage(from, { text: txt }, { quoted: seloNubank });
            }, 5000);
          } else {
            reply(
              `Por favor, aguarde *${60 - Number(moment.tz("America/Sao_Paulo").format("ss"))}s* para realizar uma nova mineração...`,
            );
          }
          break;

        case "cassino":
          if (!isGroup) return reply(msg.grupo);
          if (!JSON.stringify(sabrpg).includes(sender))
            return reply(
              `${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgsc* para se registrar na Sab's City.`,
            );
          horacass = moment.tz("America/Sao_Paulo").format("HH");
          diacass = moment.tz("America/Sao_Paulo").format("DD");
          mmcass = moment.tz("America/Sao_Paulo").format("MM");
          AB = sabrpg.map((i) => i.id).indexOf(sender);
          if (Number(args[0]) > Number(sabrpg[AB].money))
            return reply(
              `Você não possui saldo suficiente para efetuar essa aposta...`,
            );
          if (
            Number(sabrpg[AB].limiteC) === 0 &&
            Number(sabrpg[AB].horaC) === Number(horacass)
          )
            return reply(
              `*Você já apostou muito hoje...* Suas chances estão esgotadas! Por favor, volte mais tarde! 😔😭`,
            );
          HC = Number(sabrpg[AB].horaC) + 1;
          //acabou o limite...
          if (
            Number(horacass) > Number(sabrpg[AB].horaC) &&
            Number(sabrpg[AB].diaC) === Number(diacass) &&
            Number(sabrpg[AB].mC) === Number(mmcass)
          ) {
            sabrpg[AB].limiteC = 20;
            sabrpg[AB].horaC = horacass;
            fs.writeFileSync(
              "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
              JSON.stringify(sabrpg),
            );
            reply(
              `😝🤪 Mas já mlk? Bora apostar então, eu ainda vou sugar muito teu dinheiro!`,
            );
          }
          //passar do dia pro outro...
          if (
            Number(sabrpg[AB].limiteC) === 0 &&
            Number(diacass) > Number(sabrpg[AB].diaC)
          ) {
            sabrpg[AB].limiteC = 20;
            sabrpg[AB].horaC = horacass;
            sabrpg[AB].diaC = diacass;
            fs.writeFileSync(
              "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
              JSON.stringify(sabrpg),
            );
            reply(`💰🌟 ${tempo} caro jogador, como está a sua sorte hj?`);
          }
          //passar do mês pro outro...
          if (
            Number(sabrpg[AB].limiteC) === 0 &&
            Number(mmcass) > Number(sabrpg[AB].mC)
          ) {
            sabrpg[AB].limiteC = 30;
            sabrpg[AB].horaC = horacass;
            sabrpg[AB].diaC = diacass;
            sabrpg[AB].mC = mmcass;
            fs.writeFileSync(
              "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
              JSON.stringify(sabrpg),
            );
            reply(
              `📆🗣 Primeira aposta do mês? Eu ainda vou sugar muito teu dinheiro todo...`,
            );
          }
          if (Number(sabrpg[AB].limiteC) > 0) {
            if (!q) {
              return reply(
                `Você deve escolher uma quantia para apostar... Ex: ${prefix + comando} 100 _(você estará apostando R$ 100.00)_`,
              );
            }
            if (Number(args[0]) < 10)
              return reply(`Não é possível apostar menos que R$ 10.00`);
            if (Number(args[0]) > 20000)
              return reply(`Não é possível apostar mais que R$ 20000.00! 😿`);
            if (!Number(args[0])) return reply(`*${args[0]}* não é número! 😿`);
            frutasC = JSON.parse(
              fs.readFileSync("./MISA-BANKER/json/slots.json"),
            );
            resulC = `${frutasC[Math.floor(Math.random() * frutasC.length)]} : ${frutasC[Math.floor(Math.random() * frutasC.length)]} : ${frutasC[Math.floor(Math.random() * frutasC.length)]}`;
            if (resulC == `🦴 : 🦴 : 🦴`) {
              CC = Number(sabrpg[AB].limiteC) - 1;
              sabrpg[AB].money = 50;
              sabrpg[AB].limiteC = CC;
              fs.writeFileSync(
                "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
                JSON.stringify(sabrpg),
              );
              reply(
                `• *[${resulC}]* - Óia a bruxa passando... Todo o dinheiro da sua conta agora é dela!`,
              );
            }
            if (resulC == `🍫 : 🍫 : 🍫`) {
              cmrpg = 1000;
            }
            if (resulC == `🍔 : 🍔 : 🍔`) {
              cmrpg = 600;
            }
            if (resulC == `🥩 : 🥩 : 🥩`) {
              cmrpg = 400;
            }
            if (resulC == `🍕 : 🍕 : 🍕`) {
              cmrpg = 250;
            }
            if (resulC == `🌶️ : 🌶️ : 🌶️`) {
              cmrpg = 200;
            }
            if (resulC == `🍪 : 🍪 : 🍪`) {
              cmrpg = 100;
            }
            if (resulC == `🍗 : 🍗 : 🍗`) {
              cmrpg = 80;
            }
            if (resulC == `🌭 : 🌭 : 🌭`) {
              cmrpg = 70;
            }
            if (resulC == `🥞 : 🥞 : 🥞`) {
              cmrpg = 60;
            }
            if (resulC == `🥓 : 🥓 : 🥓`) {
              cmrpg = 50;
            }
            if (
              resulC == `🧇 : 🧇 : 🧇` ||
              resulC == `🍞 : 🍞 : 🍞` ||
              resulC == `🥐 : 🥐 : 🥐` ||
              resulC == `🥥 : 🥥 : 🥥` ||
              resulC == `🍎 : 🍎 : 🍎` ||
              resulC == `🍌 : 🍌 : 🍌` ||
              resulC == `🍓 : 🍓 : 🍓`
            ) {
              cmrpg = 40;
            }
            if (
              resulC == `🍐 : 🍐 : 🍐` ||
              resulC == `🍊 : 🍊 : 🍊` ||
              resulC == `🍋 : 🍋 : 🍋` ||
              resulC == `🍉 : 🍉 : 🍉` ||
              resulC == `🍇 : 🍇 : 🍇` ||
              resulC == `🍒 : 🍒 : 🍒` ||
              resulC == `🍑 : 🍑 : 🍑` ||
              resulC == `🥭 : 🥭 : 🥭` ||
              resulC == `🍍 : 🍍 : 🍍` ||
              resulC == `🥝 : 🥝 : 🥝` ||
              resulC == `🍅 : 🍅 : 🍅` ||
              resulC == `🥑 : 🥑 : 🥑` ||
              resulC == `🌽 : 🌽 : 🌽` ||
              resulC == `🥕 : 🥕 : 🥕`
            ) {
              cmrpg = 30;
            }
            if (
              resulC == `🍫 : 🍫 : 🍫` ||
              resulC == `🍔 : 🍔 : 🍔` ||
              resulC == `🥩 : 🥩 : 🥩` ||
              resulC == `🍕 : 🍕 : 🍕` ||
              resulC == `🌶️ : 🌶️ : 🌶️` ||
              resulC == `🍪 : 🍪 : 🍪` ||
              resulC == `🍗 : 🍗 : ??` ||
              resulC == `🌭 : 🌭 : 🌭` ||
              resulC == `🥞 : 🥞 : 🥞` ||
              resulC == `🥓 : 🥓 : 🥓` ||
              resulC == `🧇 : 🧇 : 🧇` ||
              resulC == `🍞 : 🍞 : 🍞` ||
              resulC == `🥐 : 🥐 : 🥐` ||
              resulC == `🥥 : 🥥 : 🥥` ||
              resulC == `🍎 : 🍎 : 🍎` ||
              resulC == `🍌 : 🍌 : 🍌` ||
              resulC == `🍓 : 🍓 : 🍓` ||
              resulC == `🍐 : 🍐 : 🍐` ||
              resulC == `🍊 : 🍊 : 🍊` ||
              resulC == `🍋 : 🍋 : 🍋` ||
              resulC == `🍉 : 🍉 : 🍉` ||
              resulC == `🍇 : 🍇 : 🍇` ||
              resulC == `🍒 : 🍒 : 🍒` ||
              resulC == `🍑 : 🍑 : 🍑` ||
              resulC == `🥭 : 🥭 : 🥭` ||
              resulC == `🍍 : 🍍 : 🍍` ||
              resulC == `🥝 : 🥝 : 🥝` ||
              resulC == `🍅 : 🍅 : 🍅` ||
              resulC == `🥑 : 🥑 : 🥑` ||
              resulC == `🌽 : 🌽 : 🌽` ||
              resulC == `🥕 : 🥕 : 🥕`
            ) {
              var Vitória = "Você acaba de ganhar";
              var CC = Number(sabrpg[AB].limiteC) - 1;
              var MR = sabrpg[AB].money;
              var TT = Number(args[0]) * Number(cmrpg);
              var TC = Number(TT) + Number(args[0]);
              var VT = Number(MR) + Number(TC) * 5;
              var Ctxt = `R$ ${Number(TC).toFixed(2)}`;
              sabrpg[AB].money = VT;
              sabrpg[AB].limiteC = CC;
              fs.writeFileSync(
                "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
                JSON.stringify(sabrpg),
              );
            } else {
              var Vitória = "Você perdeu! Como punição, você perderá";
              var CC = Number(sabrpg[AB].limiteC) - 1;
              var MR = sabrpg[AB].money;
              var VT = Number(MR) - Number(args[0]);
              var Ctxt = `R$ ${Number(args[0]).toFixed(2)}`;
              sabrpg[AB].money = VT;
              sabrpg[AB].limiteC = CC;
              fs.writeFileSync(
                "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
                JSON.stringify(sabrpg),
              );
            }
            const cassino = `• *[${resulC}]* - ${Vitória} ${Ctxt}`;
            reply(cassino);
          }
          break;
        case "rgsc":
        case "rgsabcity":
          if (!isGroup) return msg.grupo;
          if (!isSabCityOFF)
            return reply(
              `É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}sabrpg*.`,
            );
          if (JSON.stringify(sabrpg).includes(sender))
            return reply(`Seu registro foi encontrado em meu banco de dados`);
          if (!q)
            return reply(
              `Digite seu nome após o comando, para seu registro ser feito com êxito.`,
            );
          if (q.includes("@"))
            return reply(
              `O registro foi cancelado na Sab's City! Foi detectado um *@* no campo, retire-o e realize o registro novamente.`,
            );
          bancos = [
            "Inter",
            "NuBank",
            "PagBank️",
            "Bradesco",
            "Next",
            "Caixa",
            "Santander️",
            "Banco do Brasil",
            "PicPay",
            "PayPal",
            "Itaú",
          ];
          bank = bancos[Math.floor(Math.random() * bancos.length)];
          horarg = moment.tz("America/Sao_Paulo").format("HH:mm");
          hora10 = moment.tz("America/Sao_Paulo").format("HH");
          datarg = moment.tz("America/Sao_Paulo").format("DD/MM");
          dia10 = moment.tz("America/Sao_Paulo").format("DD");
          m10 = moment.tz("America/Sao_Paulo").format("MM");
          sabrpg.push({
            id: sender,
            gpid: from,
            hrg: horarg,
            drg: datarg,
            nome: q,
            namebank: bank,
            money: 0,
            pixD: 5,
            pixL: 100,
            limiteC: 15,
            horaC: hora10,
            diaC: dia10,
            mC: m10,
            limiteTh: 3,
            hrT: hora10,
            limiteTd: 24,
            diaT: dia10,
            mT: m10,
            bcbet: true,
          });
          fs.writeFileSync(
            "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
            JSON.stringify(sabrpg),
          );
          reply(
            `Registro efetuado e concluído com êxito! Seja bem vindo(a) à Sab's City, ${q}`,
          );
          setTimeout(() => {
            Misax.sendMessage(from, {
              text: `Agora você pode trabalhar e ganhar muito dinheiro jogando e apostando em nossos jogos. Para consultar seu saldo atual, use: *${prefix}minhacarteira*`,
            });
          }, 1100);
          break;

        case "meupix":
          if (!isSabCityOFF)
            return reply(
              `É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`,
            );
          if (!JSON.stringify(sabrpg).includes(sender))
            return reply(
              `${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na misa City.`,
            );
          AB = sabrpg.map((i) => i.id).indexOf(sender);
          reply(
            `Aqui está sua numeração da chave pix: *${sabrpg[AB].id.split("@")[0]}*`,
          );
          break;

        case "rankcity":
          if (!isGroup) return reply(msg.grupo);
          if (!isSabCityOFF)
            return reply(
              `É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`,
            );
          setTimeout(() => {
            reagir(from, "🤑");
          }, 300);
          patman = sabrpg.map((i) => i);
          rank = patman.sort((a, b) => (a.money < b.money ? 0 : -1));
          if (sabrpg.length > 5) {
            var totalR = 5;
          } else {
            var totalR = sabrpg.length;
          }
          txt = `🌟🧾 *Rank City:*\n–\n`;
          for (i = 0; i < totalR; i++) {
            if (i != null) {
              txt += `${i + 1}º Lugar - Usuário: *${rank[i].nome}*
• Saldo do Usuário: R$ ${Number(rank[i].money).toFixed(2)}\n–\n`;
            }
          }
          reply(txt);
          break;

        case "treinar":
        case "treino":
          if (!isGroup) return reply(msg.grupo);
          if (!isSabCityOFF)
            return reply(
              `É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`,
            );
          if (!JSON.stringify(sabrpg).includes(sender))
            return reply(
              `${tempo} usuário(a), novo(a) por aqui? Use *${prefix}rgcity* para se registrar na misa City.`,
            );
          treinamento = [
            "Cê já treinou lek",
            "Hmm",
            "Tá bão",
            "Chega lek, cê já treinou",
            "Te acalma desgrama",
          ];
          if (JSON.stringify(roubosrpg).includes(sender))
            return reply(
              `${treinamento[Math.floor(Math.random() * treinamento.length)]}`,
            );
          hora3 = moment.tz("America/Sao_Paulo").format("HH");
          data3 = moment.tz("America/Sao_Paulo").format("DD");
          roubosrpg.push({
            id: sender,
            limite: 2,
            hora: hora3,
            dia: data3,
            dinheiro: 0,
            preso: false,
            segurança: 20,
          });
          fs.writeFileSync(
            "./MISA-BANKER/usuarios/misarpg/roubosrpg.json",
            JSON.stringify(roubosrpg),
          );
          reply(
            "Treinamento efetuado com sucesso... Pronto para assaltar outros usuários",
          );
          break;

        case "soltar":
          if (!isCreator) return reply(msg.dono);
          if (!isSabCityOFF)
            return reply(
              `É nescessário a ativação do *MODO RPG* no grupo! Use *${prefix}modorpg*.`,
            );
          if (!q && !menc_os2) return;
          usu = menc_os2 ? menc_os2 : q + `@s.whatsapp.net`;
          if (!JSON.stringify(roubosrpg).includes(usu))
            return reply(`❌ ID não encontrado ou inexistente!`);
          AD = roubosrpg.map((i) => i.id).indexOf(menc_os2);
          roubosrpg[AD].preso = false;
          roubosrpg[AD].dinheiro = 0;
          fs.writeFileSync(
            "./MISA-BANKER/usuarios/misarpg/roubosrpg.json",
            JSON.stringify(roubosrpg),
          );
          reply(`Usuário solto.`);
          break;

        // 💜 FIM DOS COMANDOS RPG 💜

        //💜COMANDOS VIP 💜 TEM 10 COMANDOS NO TOTAL

        case "idade":
          if (!isvip) return enviar("so usuarios vip fia (o)");
          if (!q) return reply(`- Exemplo: ${prefix}idade 23/12/2007`);
          try {
            let txt; // Declare txt aqui
            const regexData = /^(\d{2})\/(\d{2})\/(\d{4})$/;
            if (!regexData.test(q))
              return reply(`- Exemplo: ${prefix}idade 23/12/2007`);
            const [dia, mes, ano] = q.split("/").map(Number);
            const dataNascimento = new Date(ano, mes - 1, dia);
            const hoje = new Date();
            if (dataNascimento > hoje || isNaN(dataNascimento)) {
              return reply(`*ᴄᴏʟᴏǫᴜᴇ ᴅᴀ ғᴏʀᴍᴀ ᴄᴇʀᴛᴀ ʙᴀɪᴛᴏʟᴀ 😡*`);
            }
            const diffMs = hoje - dataNascimento;
            const idadeData = new Date(diffMs);
            const anos = idadeData.getUTCFullYear() - 1970;
            const meses = idadeData.getUTCMonth();
            const dias = idadeData.getUTCDate() - 1;
            const diasVividos = Math.floor(diffMs / (1000 * 60 * 60 * 24));
            const horasVividas = diasVividos * 24;
            const minutosVividos = horasVividas * 60;
            const proximoAniversario = new Date(
              hoje.getFullYear(),
              mes - 1,
              dia,
            );
            if (proximoAniversario <= hoje)
              proximoAniversario.setFullYear(hoje.getFullYear() + 1);
            const diasParaAniversario = Math.ceil(
              (proximoAniversario - hoje) / (1000 * 60 * 60 * 24),
            );
            txt = `
    *🧮 ᴅᴀᴛᴀ ᴅᴇ ɴᴀsᴄɪᴍᴇɴᴛᴏ: ${q}*\n*🌟 ɪᴅᴀᴅᴇ: ${anos} ᴀɴᴏs, ${meses} ᴍᴇsᴇs ᴇ ${dias} ᴅɪᴀs*\n\n*📌 𝑬𝑺𝑻𝑨𝑻𝑰𝑺𝑻𝑰𝑪𝑨𝑺 𝑫𝑬 𝑽𝑰𝑫𝑨*\n\n*🩸 ${diasVividos} ᴅɪᴀs ᴠɪᴠɪᴅᴏs*\n*⏰ ${horasVividas} ʜᴏʀᴀs ᴠɪᴠɪᴅᴀs*\n*⏱ ${minutosVividos} ᴍɪɴᴜᴛᴏs ᴠɪᴠɪᴅᴏs*\n*📍ғᴀʟᴛᴀᴍ ${diasParaAniversario} ᴅɪᴀs ᴘᴀʀᴀ ᴏ ᴘʀᴏxɪᴍᴏ ᴀɴɪᴠᴇʀsᴀʀɪᴏ*\n\n> ${botName}`.trim();
            Misax.sendMessage(
              from,
              {
                video: { url: "https://files.catbox.moe/5iknjk.mp4" },
                gifPlayback: true,
                caption: txt,
              },
              { quoted: selo },
            );
          } catch (e) {
            console.log(e);
          }
          break;

        case "plaq1":
          {
            if (!isvip) return enviar("so usuarios vip fia (o)");
            if (args.length < 1)
              return reply(`Exemplo  ${prefix}plaq e digite o seu nome`);
            teks = body.slice(6);
            if (teks.length > 15)
              return reply("O texto é longo, até 15 caracteres"); //maximo de caracteres
            buffer = `https://raptibef.sirv.com/images%20(3).jpeg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=19%25&text.0.size=45&text.0.color=000000&text.0.opacity=55&text.0.font.family=Crimson%20Text&text.0.font.weight=300&text.0.font.style=italic&text.0.outline.opacity=21`;
            Misax.sendMessage(sender, {
              image: { url: buffer },
              caption: " *Plaquinha feita*",
            });
            await Misax.sendMessage(sender, {
              react: { text: `🔞`, key: info.key },
            });
          }
          reply(`a plaquinha esta sendo enviado no seu privado...`);
          break;

        case "plaq2":
          {
            if (!isvip) return enviar("so usuarios vip fia (o)");
            if (args.length < 1)
              return reply(`Exemplo  ${prefix}plaq e digite o seu nome`);
            teks = body.slice(6);
            if (teks.length > 15)
              return reply("O texto é longo, até 15 caracteres"); //maximo de caracteres
            buffer = `https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${teks}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`;
            Misax.sendMessage(sender, {
              image: { url: buffer },
              caption: " *Plaquinha feita*",
            });
            await Misax.sendMessage(sender, {
              react: { text: `🔞`, key: info.key },
            });
          }
          reply(`a plaquinha esta sendo enviado no seu privado...`);
          break;

        case "plaq3":
          {
            if (!isvip) return enviar("so usuarios vip fia (o)");
            if (args.length < 1)
              return reply(`exemplo ${prefix}plaq e digite o seu nome`);
            teks = body.slice(6);
            if (teks.length > 15)
              return reply("O texto é longo, até 15 caracteres"); //maximo de caracteres
            buffer = `https://umethroo.sirv.com/bunda3.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`;
            Misax.sendMessage(sender, {
              image: { url: buffer },
              caption: " *Plaquinha feita*",
            });
            await Misax.sendMessage(sender, {
              react: { text: `🔞`, key: info.key },
            });
          }
          reply(`a plaquinha esta sendo enviado no seu privado...`);
          break;

        case "plaq4":
          {
            if (!isvip) return enviar("so usuarios vip fia (o)");
            if (args.length < 1)
              return reply(`Exemplo  ${prefix}plaq e digite o seu nome`);
            teks = body.slice(6);
            if (teks.length > 15)
              return reply("O texto é longo, até 15 caracteres"); //maximo de caracteres
            buffer = `https://umethroo.sirv.com/peito1.jpg?text.0.text=${teks}&text.0.position.x=-48%25&text.0.position.y=-68%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`;
            Misax.sendMessage(sender, {
              image: { url: buffer },
              caption: " *Plaquinha feita*",
            });
            await Misax.sendMessage(sender, {
              react: { text: `🔞`, key: info.key },
            });
          }
          reply(`a plaquinha esta sendo enviado no seu privado...`);
          break;

        case "plaq5":
          {
            if (!isvip) return enviar("so usuarios vip fia (o)");
            if (args.length < 1)
              return reply(`Exemplo  ${prefix}plaq e digite o seu nome`);
            teks = body.slice(6);
            if (teks.length > 15)
              return reply("O texto é longo, até 15 caracteres"); //maximo de caracteres
            buffer = `https://umethroo.sirv.com/9152e7a9-7d49-48ef-b8ac-2e6149fda0b2.jpg?text.0.text=${teks}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`;
            Misax.sendMessage(sender, {
              image: { url: buffer },
              caption: " *Plaquinha feita*",
            });
            await Misax.sendMessage(sender, {
              react: { text: `🔞`, key: info.key },
            });
          }
          reply(`a plaquinha esta sendo enviado no seu privado...`);
          break;

        case "plaq6":
          {
            if (!isvip) return enviar("so usuarios vip fia (o)");
            if (args.length < 1)
              return reply(`Exemplo  ${prefix}plaq e digite o seu nome`);
            teks = body.slice(6);
            if (teks.length > 15)
              return reply("O texto é longo, até 15 caracteres"); //maximo de caracteres
            buffer = `https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${teks}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`;
            Misax.sendMessage(sender, {
              image: { url: buffer },
              caption: " *Plaquinha feita*",
            });
            await Misax.sendMessage(sender, {
              react: { text: `🔞`, key: info.key },
            });
          }
          reply(`a plaquinha esta sendo enviado no seu privado...`);
          break;

        case "plaq7":
          {
            if (!isvip) return enviar("so usuarios vip fia (o)");
            if (args.length < 1)
              return reply(`Exemplo  ${prefix}plaq e digite o seu nome`);
            teks = body.slice(6);
            if (teks.length > 15)
              return reply("O texto é longo, até 15 caracteres"); //maximo de caracteres
            buffer = `https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${teks}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`;
            Misax.sendMessage(sender, {
              image: { url: buffer },
              caption: " *Plaquinha feita*",
            });
            await Misax.sendMessage(sender, {
              react: { text: `🔞`, key: info.key },
            });
          }
          reply(`a plaquinha esta sendo enviado no seu privado...`);
          break;

        case "ddd":
          if (!isvip) return enviar("apenas vip fiu");
          if (args.length < 1) return reply(`Use ${prefix + comando} 81`);
          ddd = body.slice(5);
          ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`);
          dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`;
          for (let i = 0; i < ddds.data.cities.length; i++) {
            dddlist += `${i + 1} ⋆💜͙̈⃤꙰  *${ddds.data.cities[i]}*\n`;
          }
          Misax.sendMessage(from, { text: dddlist }, { quoted: seloNubank });
          break;

        case "likeff": {
          if (!isvip) return enviar("so usuarios vip fia (o)");
          if (!q)
            return reply(
              `⏤͟͞⃝ Por favor, forneça o *ID do jogador* do Free Fire para enviar like.\n\n📌 Exemplo:\n${prefix + comando} 1989445071`,
            );

          try {
            await Misax.sendMessage(from, {
              react: { text: "❤️", key: info.key },
            });
            reply(`*_Enviando like... Aguarde_* 💖`);

            const apiUrl = `https://zero-two-apis.com.br/api/get/ff-send-like?id=${q}&regiao=br&apikey=FOXYCAGAO`;
            const response = await fetch(apiUrl);
            const result = await response.json();

            if (!result.status) {
              return reply(`❌ Falha na comunicação com o servidor de likes.`);
            }

            const data = result.resultados;

            if (data.status === false) {
              let errorMessage = `❌ ${data.mensagem}`;
              if (data.tipoErro === "TEMPO_ESPERA") {
                errorMessage += `\n⏱️ Tempo restante: ${data.tempoFormatado || "Calculando..."}`;
              }
              return reply(errorMessage);
            }

            const formatWaitTime = (ms) => {
              const hours = Math.floor(ms / (1000 * 60 * 60));
              const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
              return `${hours}h ${minutes}m`;
            };

            const tempoEspera = formatWaitTime(data.tempo.tempoEsperaProximo);
            const enviadoEm = new Date(data.tempo.enviadoEm).toLocaleString(
              "pt-BR",
            );
            const proximoEnvio = new Date(
              data.tempo.proximoEnvio,
            ).toLocaleString("pt-BR");
            const imageUrl =
              "https://zero-two.info/uploads/images/file-1734283054626-308003804.jpeg";

            const responseMessage = `
╭─ •◈• ────┈┈┈
│ ❤️ *ENVIO DE LIKE - FREE FIRE*
╰───────────────

✅ *${data.mensagem}*

👤 *Jogador Alvo:*
 🔹 *Nickname:* ${data.jogador.nickname}
 🔹 *ID:* ${data.jogador.id}

📊 *Estatísticas de Likes:*
 🔹 *Likes Acumulados:* ${data.estatisticas.likesAcumulados.toLocaleString("pt-BR")}
 🔹 *Likes Enviados (Hoje):* ${data.estatisticas.likesEnviados}/100

⏱️ *Tempo de Espera:* ${tempoEspera}
 🔹 *Enviado em:* ${enviadoEm}
 🔹 *Próximo envio:* ${proximoEnvio}`.trim();

            await Misax.sendMessage(
              from,
              {
                image: { url: imageUrl },
                caption: responseMessage,
              },
              { quoted: info },
            );
          } catch (e) {
            console.error("[ERRO CRÍTICO]", e);
            reply(
              "❌ Falha crítica no sistema de likes. Tente novamente mais tarde.",
            );
          }

          break;
        }

        case "site-xvideos":
          if (!isvip) return reply(msg.premium);
          reply(`Olha o Pv rsrs... 👀🔥`);
          xvid = `
Aqui Está Seu Pedido Safadinho(a) 
⌠🔥⌡ > https://www.xvideos.com/channels/testedefudelidade#
`;
          Misax.sendMessage(sender, { text: xvid }, { quoted: seloNubank });
          break;

        case "site-xvideos2":
          if (!isvip) return reply(msg.premium);
          reply(`Olha o Pv rsrs... 👀🔥`);
          xvid = `
Aqui Está Seu Pedido Safadinho(a) 
⌠🙃⌡ > https://www.xnxx.com/
`;
          Misax.sendMessage(sender, { text: xvid }, { quoted: seloNubank });
          break;

        case "site-hentai":
          if (!isvip) return reply(msg.premium);
          reply(`Olha o Pv rsrs... 👀🔥`);
          hentai = `
Aqui Está Seu Pedido Safadinho(a)
⌠🔥⌡ > https://www.hentaistube.com/
`;
          Misax.sendMessage(sender, { text: hentai }, { quoted: seloNubank });
          break;

        case "site-hentai2":
          if (!isvip) return reply(msg.premium);
          reply(`Olha o Pv rsrs... 👀🔥`);
          hentai = `
Aqui Está Seu Pedido Safadinho(a)
⌠🔥⌡ > https://animeshentai.biz/
`;
          Misax.sendMessage(sender, { text: hentai }, { quoted: seloNubank });
          break;

        case "gerarcpf":
          if (!isvip) return reply(msg.premium);
          cp1 = `${Math.floor(Math.random() * 300) + 600}`;
          cp2 = `${Math.floor(Math.random() * 300) + 600}`;
          cp3 = `${Math.floor(Math.random() * 300) + 600}`;
          cp4 = `${Math.floor(Math.random() * 30) + 60}`;
          cpf = `${cp1}.${cp2}.${cp3}-${cp4}`;
          Misax.sendMessage(
            from,
            { text: `CPF gerado com sucesso : ${cpf}` },
            { quoted: seloNubank },
          );
          break;

        case "marukarv":
          {
            if (!isvip) return reply(resposta.premium);

            await reagir(from, "😈");
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );
            const numb = Math.floor(Math.random() * 40) + 1;
            const wew = {
              url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MaruKarv/%20${numb}.jpg`,
            };
            const mag = "🔞MaruKarv??";
            let buttonMessage = {
              image: wew,
              caption: mag,
              footer: `${botName}`,
              headerType: 4,
            };
            await Misax.sendMessage(sender, buttonMessage, {
              quoted: seloNubank,
            });
          }
          break;

        case "netersg":
          {
            if (!isvip) return reply(resposta.premium);

            await reagir(from, "😈");
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );
            const numb = Math.floor(Math.random() * 30) + 1;
            const wew = {
              url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/netersg/%20${numb}.jpg`,
            };
            const mag = "🔞netersg🔞";
            let buttonMessage = {
              image: wew,
              caption: mag,
              footer: `${botName}`,
              headerType: 4,
            };
            await Misax.sendMessage(sender, buttonMessage, {
              quoted: seloNubank,
            });
          }
          break;

        case "egril18":
          {
            if (!isvip) return reply(resposta.premium);

            await reagir(from, "😈");
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );

            const numb = Math.floor(Math.random() * 14) + 1;
            const videoUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/EgrilVideo/%20${numb}.mp4`;
            const caption = "🔞egril🔞";

            await Misax.sendMessage(
              sender,
              {
                video: { url: videoUrl },
                caption: caption,
                footer: `${botName}`,
                headerType: 4,
              },
              { quoted: seloNubank },
            );
          }
          break;

        case "princesa":
          {
            if (!isvip) return reply(resposta.premium);
            await reagir(from, "😈");
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );
            const numb = Math.floor(Math.random() * 32) + 1;
            const wew = {
              url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/McPrincesa/%20${numb}.jpg`,
            };
            const mag = "🔞McPrincesa🔞";
            let buttonMessage = {
              image: wew,
              caption: mag,
              footer: `${botName}`,
              headerType: 4,
            };
            await Misax.sendMessage(sender, buttonMessage, {
              quoted: seloNubank,
            });
          }
          break;

        case "carniello":
          {
            if (!isvip) return reply(resposta.premium);

            await reagir(from, "😈");
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );
            const numb = Math.floor(Math.random() * 29) + 1;
            const wew = {
              url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/carniello/%20${numb}.jpg`,
            };
            const mag = "🔞carniello🔞";
            let buttonMessage = {
              image: wew,
              caption: mag,
              footer: `${botName}`,
              headerType: 4,
            };
            await Misax.sendMessage(sender, buttonMessage, {
              quoted: seloNubank,
            });
          }
          break;

        case "vitacelestine":
          {
            if (!isvip) return reply(resposta.premium);

            await reagir(from, "😈");
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );
            const numb = Math.floor(Math.random() * 30) + 1;
            const wew = {
              url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/VitaCelestine/%20${numb}.jpg`,
            };
            const mag = "🔞Vita Celestine🔞";
            let buttonMessage = {
              image: wew,
              caption: mag,
              footer: `${botName}`,
              headerType: 4,
            };
            await Misax.sendMessage(sender, buttonMessage, {
              quoted: seloNubank,
            });
          }
          break;

        case "porno":
        case "onlyfansvideo":
          {
            if (!isvip) return reply(resposta.premium);

            await reagir(from, "😈");
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );
            const numb = Math.floor(Math.random() * 47) + 1;
            const videoUrl = `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/OnlyfansVideo/%20${numb}.mp4`;

            await Misax.sendMessage(
              sender,
              { video: { url: videoUrl }, footer: `${botName}`, headerType: 4 },
              { quoted: seloNubank },
            );
          }
          break;

        case "marinamui":
          {
            if (!isvip) return reply(resposta.premium);

            await reagir(from, "😈");
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );
            const numb = Math.floor(Math.random() * 27) + 1;
            const wew = {
              url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/MarinaMui/%20${numb}.jpg`,
            };
            const mag = "🔞Marina Mui??";
            let buttonMessage = {
              image: wew,
              caption: mag,
              footer: `${botName}`,
              headerType: 4,
            };
            await Misax.sendMessage(sender, buttonMessage, {
              quoted: seloNubank,
            });
          }
          break;
        case "laynuniz":
          {
            if (!isvip) return reply(resposta.premium);

            await reagir(from, "😈");
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );
            const numb = Math.floor(Math.random() * 25) + 1;
            const wew = {
              url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/LayNuniz/%20${numb}.jpg`,
            };
            const mag = "🔞Lay Nuniz🔞";
            let buttonMessage = {
              image: wew,
              caption: mag,
              footer: `${botName}`,
              headerType: 4,
            };
            await Misax.sendMessage(sender, buttonMessage, {
              quoted: seloNubank,
            });
          }
          break;

        case "isawaifu":
          {
            if (!isvip) return reply(resposta.premium);

            await reagir(from, "😈");
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );
            const numb = Math.floor(Math.random() * 21) + 1;
            const wew = {
              url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/IsaWaifu/%20${numb}.jpg`,
            };
            const mag = "🔞IsaWaifu🔞";
            let buttonMessage = {
              image: wew,
              caption: mag,
              footer: `${botName}`,
              headerType: 4,
            };
            await Misax.sendMessage(sender, buttonMessage, {
              quoted: seloNubank,
            });
          }
          break;

        case "rule34":
          {
            //🦴\\
            if (!isvip) {
              return reply(
                "✨ Este recurso é exclusivo para usuários **Premium**! 🔒 Considere fazer o upgrade para desbloquear todas as vantagens. 🚀",
              );
            }
            try {
              const res = await fetch(
                "https://rule34.xxx/index.php?page=dapi&s=post&q=index&limit=100&json=1",
              );
              const data = await res.json();

              if (!data || !data.length)
                return reply("⚠️ Nenhuma imagem encontrada.");

              // Escolhe uma imagem aleatória
              const post = data[Math.floor(Math.random() * data.length)];

              const imageUrl = post.file_url;
              const tags = post.tags.split(" ").slice(0, 10).join(", ");

              await Misax.sendMessage(
                from,
                {
                  image: { url: imageUrl },
                  caption: `🔞 *Rule34.xxx*\n\n📌 *Tags:* ${tags}\n📁 *ID:* ${post.id}`,
                },
                { quoted: info },
              );
            } catch (e) {
              console.error(e);
              reply("❌ Erro ao buscar imagem do Rule34.");
            }
          }
          break;

        case "isadoramartinez":
          {
            if (!isvip) return reply(resposta.premium);
            await reagir(from, "😈");
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );
            const numb = Math.floor(Math.random() * 30) + 1;
            const wew = {
              url: `https://raw.githubusercontent.com/Herojoii/midiiporno/main/packs/ISADORA%20MARTINEZ/%20${numb}.jpg`,
            };
            const mag = "🔞Isadora Martinez🔞";
            let buttonMessage = {
              image: wew,
              caption: mag,
              footer: `${botName}`,
              headerType: 4,
            };
            await Misax.sendMessage(sender, buttonMessage, {
              quoted: seloNubank,
            });
          }
          break;

        case "onlyfans":
          {
            if (!isvip) return reply(resposta.premium);
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );
            await Misax.sendMessage(sender, {
              image: { url: "https://world-ecletix.onrender.com/api/onlyfans" },
              quoted: seloNubank,
            });
          }
          break;

        case "presentinho":
          if (!isvip) return reply(resposta.premium);
          await reply(
            `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
          );
          await Misax.sendMessage(sender, {
            image: { url: "https://world-ecletix.onrender.com/api/atriz" },
            quoted: seloNubank,
          });
          break;

        case "presentinho2":
        case "pack+18":
          {
            if (!isvip) return reply(resposta.premium);
            await reagir(from, `😈`);
            await reply(
              `${isGroup ? "Enviando no seu pv, aguarde..." : "Enviando, aguarde..."}😈`,
            );
            Misax.sendMessage(sender, {
              image: { url: "https://world-ecletix.onrender.com/api/atriz" },
              quoted: seloNubank,
            });
          }
          break;

        case "hentai":
          {
            if (!isvip) return enviar(msg.vip);
            await reply(`${isGroup ? "enviando no seu pv." : "enviando..."}`);
            try {
              Hentai = await fetchJson(
                `https://api.nexfuture.com.br/api/outros/hentais/videos`,
              );
              gebet = `> *_${botName} - hentais_*\n
> ♤Título: ${Hentai.resultado[0].titulo}
> ♡Categoria: ${Hentai.resultado[0].categoria}
> ♧Vizualizações: ${Hentai.resultado[0].views}
> □link: ${Hentai.resultado[0].url}`;

              await Misax.sendMessage(sender, {
                video: { url: `${Hentai.resultado[0].videoDown}` },
                mimetype: "video/mp4",
                caption: gebet,
              });
            } catch (e) {
              reply("deu erro ao buscar hentais");
              console.log("cuzin", e);
            } //★彡 ʏᴜɴᴏ-ʙᴏᴛ - ᴄʜᴀɴɴᴇʟ 彡★
          }
          break;

        //💜 COMANDO DE ONLYFANS 💜 TOTAL DE COMANDOS 9

        case "only1": //${botName}
          reagir(from, "🤭");
          reply(`*Acabei de te enviar no PV 🤭*`);
          only1 = `
Luiz russo (mansão maromba)
⌠🌐⌡> https://t.me/+8cJ7yGnq5fI2YjYx
`;
          Misax.sendMessage(sender, { text: only1 }, { quoted: seloNubank });
          break;

        case "only2": //${botName}
          reagir(from, "🤭");
          reply(`*Acabei de te enviar no PV 🤭*`);
          only2 = `
Luiza blue 
⌠🌐⌡> https://t.me/+JaX8wY_45843ZTBh
`;
          Misax.sendMessage(sender, { text: only2 }, { quoted: seloNubank });
          break;

        case "only3": //${botName}
          reagir(from, "🤭");
          reply(`*Acabei de te enviar no PV 🤭*`);
          only3 = `
Isadora vale 
⌠🌐⌡> https://t.me/+smb4i0bxRl41ZjRh
`;
          Misax.sendMessage(sender, { text: only3 }, { quoted: seloNubank });
          break;

        case "only4": //${botName}
          reagir(from, "🤭");
          reply(`*Acabei de te enviar no PV 🤭*`);
          only4 = `
Ingrid bianchi
⌠🌐⌡> https://t.me/+RJtf2TqTQ8NjZjlh
`;
          Misax.sendMessage(sender, { text: only4 }, { quoted: seloNubank });
          break;

        case "only5": //${botName}
          reagir(from, "🤭");
          reply(`*Acabei de te enviar no PV 🤭*`);
          only5 = `
Lizy Donato 
⌠🌐⌡> https://t.me/+gmSjm2WZnb41OGEx
`;
          Misax.sendMessage(sender, { text: only5 }, { quoted: seloNubank });
          break;

        case "only6": //${botName}
          reagir(from, "🤭");
          reply(`*Acabei de te enviar no PV 🤭*`);
          only6 = ` 
Feh Galvão
⌠🌐⌡> https://t.me/+naeQ1pp8ajswMjgx
`;
          Misax.sendMessage(sender, { text: only6 }, { quoted: seloNubank });
          break;

        case "only7": //${botName}
          reagir(from, "🤭");
          reply(`*Acabei de te enviar no PV 🤭*`);
          only7 = `
Tatyzack
⌠🌐⌡> https://t.me/+NvglGFhOLSY5NmZ
`;
          Misax.sendMessage(sender, { text: only7 }, { quoted: seloNubank });
          break;

        case "only8": //${botName}
          reagir(from, "🤭");
          reply(`*Acabei de te enviar no PV 🤭*`);
          only8 = `
Ayrla Souza 
⌠🌐⌡> https://t.me/+XLziPd47MWo2N2Y
`;
          Misax.sendMessage(sender, { text: only8 }, { quoted: seloNubank });
          break;

        case "only9": //${botName}
          reagir(from, "🤭");
          reply(`*Acabei de te enviar no PV 🤭*`);
          only9 = `
ALINE FARIA
⌠🌐⌡> https://t.me/+j1xp_hmXrx5lZWMx
`;
          Misax.sendMessage(sender, { text: only9 }, { quoted: seloNubank });
          break;

        //💜 FIM 💜

        // 💜 EM BAIXO COMANDOS DE ADM 💜   TOTAL DE COMANDOS 19

        case "listabr":
          if (!isGroup) return reply(msg.grupo);
          if (!isGroupAdmins) return reply(msg.adm);
          teks = "𝗕𝗥𝗔S𝗜𝗟𝗘𝗜𝗥𝗢𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢 \n";
          men = [];
          for (let mem of groupMembers) {
            if (mem.id.startsWith(55)) {
              teks += `➤ @${mem.id.split("@")[0]}\n`;
              men.push(mem.id);
            }
          }
          if (teks.indexOf("➤") < 0)
            return reply("🇧🇷 *NENHUM NÚMERO BR FOI ENCONTRADO* 🇧🇷");
          Misax.sendMessage(from, { text: teks, mentions: men });
          break;

        case "listafake":
          if (!isGroup) return reply(msg.grupo);
          if (!isGroupAdmins) return reply(msg.adm);
          teks = "𝗙𝗔𝗞𝗘𝗦 𝗡𝗢 𝗚𝗥𝗨𝗣𝗢  \n";
          men = [];
          for (let mem of groupMembers) {
            if (!mem.id.startsWith(55)) {
              teks += `➤ @${mem.id.split("@")[0]}\n`;
              men.push(mem.id);
            }
          }
          if (teks.indexOf("➤") < 0) return reply(" 𝗡𝗲𝗻𝗵𝘂𝗺 𝗙𝗮𝗹𝘀𝗼 𝗗𝗲𝘁𝗲𝗰𝘁𝗔𝗱𝗼");
          Misax.sendMessage(from, { text: teks, mentions: men });
          break;

        case "ativarcmds":
        case "ativacoes":
          if (!isGroup) return reply(msg.grupo);
          if (!isGroupAdmins) return reply(msg.botadm);

          var statuszada = `
╭───『 *Ativações do Grupo* 』
│📌 Anti Link Hard: ${isAntiLink ? "✓" : "✕"} 
│⤷ Comando: ${prefix}antilink 1 / 0
│
│👋 Boas-Vindas: ${isBemVindo ? "✓" : "✕"} 
│⤷ Comando: ${prefix}bemvindo 1 / 0
│
│🎭 Auto Sticker: ${isAutofigu ? "✓" : "✕"} 
│⤷ Comando: ${prefix}autofigu 1 / 0
╰────────────────────`;

          Misax.sendMessage(
            from,
            {
              text: statuszada,
            },
            { quoted: seloNubank },
          );

          break;

        case "totag":
        case "cita":
        case "hidetag":
          if (!isGroup) return reply(msg.grupo);
          if (!isGroupAdmins) return reply(msg.adm);
          var DFC = "";
          var rsm =
            info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
          var pink = isQuotedImage
            ? rsm?.imageMessage
            : info.message?.imageMessage;
          var blue = isQuotedVideo
            ? rsm?.videoMessage
            : info.message?.videoMessage;
          var purple = isQuotedDocument
            ? rsm?.documentMessage
            : info.message?.documentMessage;
          var yellow = isQuotedDocW
            ? rsm?.documentWithCaptionMessage?.message?.documentMessage
            : info.message?.documentWithCaptionMessage?.message
                ?.documentMessage;
          var aud_d = isQuotedAudio ? rsm.audioMessage : "";
          var figu_d = isQuotedSticker ? rsm.stickerMessage : "";
          var red =
            isQuotedMsg &&
            !aud_d &&
            !figu_d &&
            !pink &&
            !blue &&
            !purple &&
            !yellow
              ? rsm.conversation
              : info.message?.conversation;
          var green =
            rsm?.extendedTextMessage?.text ||
            info?.message?.extendedTextMessage?.text;
          var MRC_TD = groupMembers.map((i) => i.id);
          if (pink && !aud_d && !purple) {
            var DFC = pink;
            pink.caption =
              q.length > 1
                ? "Marcação do(a) Adm: " + q
                : pink.caption.replace(
                    new RegExp(prefix + comando, "gi"),
                    `Marcação do(a) Adm: ${pushname}\n\n`,
                  );
            pink.image = { url: pink.url };
            pink.mentions = MRC_TD;
          } else if (blue && !aud_d && !purple) {
            var DFC = blue;
            blue.caption =
              q.length > 1
                ? "Marcação do(a) Adm: " + q.trim()
                : blue.caption
                    .replace(
                      new RegExp(prefix + comando, "gi"),
                      `Marcação do(a) Adm: ${pushname}\n\n`,
                    )
                    .trim();
            blue.video = { url: blue.url };
            blue.mentions = MRC_TD;
          } else if (red && !aud_d && !purple) {
            black = {};
            black.text = red
              .replace(
                new RegExp(prefix + comando, "gi"),
                `Marcação do(a) Adm: ${pushname}\n\n`,
              )
              .trim();
            black.mentions = MRC_TD;
            var DFC = black;
          } else if (!aud_d && !figu_d && green && !purple && !purple) {
            brown = {};
            brown.text = green
              .replace(
                new RegExp(prefix + comando, "gi"),
                `Marcação do(a) Adm: ${pushname}\n\n`,
              )
              .trim();
            brown.mentions = MRC_TD;
            var DFC = brown;
          } else if (purple) {
            var DFC = purple;
            purple.document = { url: purple.url };
            purple.mentions = MRC_TD;
          } else if (yellow && !aud_d) {
            var DFC = yellow;
            yellow.caption =
              q.length > 1
                ? "Marcação do(a) Adm: " + q.trim()
                : yellow.caption
                    .replace(
                      new RegExp(prefix + comando, "gi"),
                      `Marcação do(a) Adm: ${pushname}\n\n`,
                    )
                    .trim();
            yellow.document = { url: yellow.url };
            yellow.mentions = MRC_TD;
          } else if (figu_d && !aud_d) {
            var DFC = figu_d;
            figu_d.sticker = { url: figu_d.url };
            figu_d.mentions = MRC_TD;
          } else if (aud_d) {
            var DFC = aud_d;
            aud_d.audio = { url: aud_d.url };
            aud_d.mentions = MRC_TD;
            aud_d.ptt = true;
          }
          Misax.sendMessage(from, DFC).catch((e) => {
            console.log(e);
          });
          break;

        case "ban":
        case "kick":
          if (!isBotGroupAdmins) return enviar(msg.botadm);
          if (!isGroupAdmins && !isDono) return enviar(msg.adm);
          if (!isGroupAdmins && !isDono) return enviar(msg.adm);
          try {
            if (!menc_os2 || menc_jid2[1])
              return enviar(
                "Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...",
              );
            if (!JSON.stringify(groupMembers).includes(menc_os2))
              return enviar("𝚅𝚒𝚒𝚡𝚡! 𝙴𝚜𝚜𝚎 𝚍𝚊𝚒 𝚓𝚊 𝚝𝚊 𝚌𝚘𝚖 𝚘 𝚝𝚒𝚗𝚑𝚘𝚜𝚘 𝚔𝚔.");
            if (numeroBot.includes(menc_os2))
              return enviar("𝙴𝚒𝚒𝚒! 𝚂𝚘𝚞 𝚍𝚎𝚜𝚌𝚊𝚛𝚝𝚊𝚟𝚎𝚕 𝚗𝚊𝚘 𝚔𝚔");
            if (numeroDono.includes(menc_os2))
              return enviar(
                "*𝙽𝚊𝚘 𝚝𝚘𝚞 𝚐𝚘𝚜𝚝𝚊𝚗𝚍𝚘 𝚍𝚒𝚜𝚜𝚘, 𝚟𝚘𝚌𝚎 𝚝𝚊 𝚝𝚎𝚗𝚍𝚘 𝚍𝚊𝚛 𝚋𝚊𝚗 𝚗𝚘 𝚒𝚛𝚞𝚖𝚒𝚗𝚑𝚊??*",
              );
            clara.groupParticipantsUpdate(from, [menc_os2], "remove");
            Misax.sendMessage(from, {
              text: `*𝙴𝚜𝚜𝚎 𝚊𝚒 𝚏𝚘𝚒 𝚌𝚊𝚗𝚝𝚊𝚛 𝚌𝚘𝚖 𝚘 𝚝𝚒𝚗𝚑𝚘𝚜𝚘 𝚔𝚔𝚔*`,
              mentions: [sender],
            });
          } catch (e) {
            console.log(e);
          }
          break;

        case "grupo":
          if (!isGroup) return enviar(msg.grupo);
          if (!isBotGroupAdmins) return enviar(msg.botadm);
          if (!isGroupAdmins && !isDono) return enviar(msg.adm);
          try {
            if (q === "a") {
              await reagir("🔓");
              await clara.groupSettingUpdate(from, "not_announcement");
              enviar(`𝙾 𝚐𝚛𝚞𝚙𝚘 𝚏𝚘𝚒 𝚊𝚋𝚎𝚛𝚝𝚘 🔓`);
            }
            if (q === "f") {
              await reagir("🔒");
              await clara.groupSettingUpdate(from, "announcement");
              enviar(`𝙾 𝚐𝚛𝚞𝚙𝚘 𝚏𝚘𝚒 𝚏𝚎𝚌𝚑𝚊𝚍𝚘 🔒`);
            } else {
              enviar(
                `𝙿𝚊𝚛𝚊 𝚙𝚘𝚍𝚎𝚛 𝚊𝚋𝚛𝚒𝚛 𝚘 𝚐𝚛𝚞𝚙𝚘 𝚞𝚜𝚎: ${prefix + comando} a\n𝙴 𝚙𝚊𝚛𝚊 𝚘 𝚏𝚎𝚌𝚑𝚊𝚛 𝚞𝚜𝚎: ${prefix + comando} f`,
              );
            }
          } catch (e) {
            reagir("⚠️");
            consoleErro(e);
            enviar(msg.error);
          }
          break;

        case "resetlink":
          {
            if (!isGroup) return enviar(msg.grupo);
            if (!isBotGroupAdmins) return enviar(msg.botadm);
            if (!isGroupAdmins && !isDono) return enviar(msg.adm);
            try {
              await clara.groupRevokeInvite(from);
              enviar(`*Link de convite resetado com sucesso*`);
            } catch (e) {
              console.log(e);
              enviar(`algo deu errado`);
            }
          }
          break;

        case "soli": {
          //by:
          if (!isGroupAdmins) return enviar(msg.adm);
          if (!isBotGroupAdmins) return enviar(msg.botadm);
          const solAll = await Misax.groupRequestParticipantsList(from);
          if (!solAll || solAll.length === 0) {
            return reply("0 solicitação no momento.");
          }
          let formattedString = solAll
            .map((item) => {
              let user = item.jid.replace("@s.whatsapp.net", "");
              return `Usuario: @${user}\nEntrou como?: ${item.request_method}\n`;
            })
            .join("-"); //Nk Petrøv
          reply(
            `Solicitações pendentes.\n\n${formattedString}`,
            solAll.map((v) => v.jid),
          );
          break;
        }

        case "limpar":
          if (!isGroup) return reply("*OPS, SO PODE SER USADO EM GRUPOS*");
          if (!isGroupAdmins)
            return reply("SAI DAI MACACO SEM ADM, SO ADM PODE USAR VEY*");
          if (!isBotGroupAdmins) return reply(`*${botName} precisa de adm 🥺*`);
          reply(`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nn\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️
❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`);
          break;

        case "promover":
          if (!isGroupAdmins) return reply("você não e adm");
          if (!isBotGroupAdmins) return reply("bot precisa ser adm");
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...",
            );
          if (!JSON.stringify(groupMembers).includes(menc_os2))
            return reply(
              "Este usuário foi removido do grupo ou saiu, não será possível promover..",
            );
          Misax.sendMessage(from, {
            text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`,
            mentions: [menc_os2],
          });
          Misax.groupParticipantsUpdate(from, [menc_os2], "promote");
          break;

        case "rebaixar":
          if (!isGroupAdmins) return reply("você não e adm");
          if (!isBotGroupAdmins) return reply("bot precisa ser adm");
          if (!menc_os2 || menc_jid2[1])
            return reply(
              "Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...",
            );
          if (!JSON.stringify(groupMembers).includes(menc_os2))
            return reply(
              "Este usuário foi removido do grupo ou saiu, não será possível rebaixar..",
            );
          Misax.sendMessage(from, {
            text: `@${menc_os2.split("@")[0]} Foi rebaixado para [ MEMBRO COMUM ] com sucesso.`,
            mentions: [menc_os2],
          });
          Misax.groupParticipantsUpdate(from, [menc_os2], "demote");
          break;

        case "nomegp":
          if (!isGroup) return enviar(msg.grupo);
          if (!isGroupAdmins && !isDono) return enviar(msg.adm);
          if (!isBotGroupAdmins) return enviar(msg.botadm);
          if (!q) return enviar(msg.query);
          await clara.groupUpdateSubject(from, `${q}`);
          await Misax.sendMessage(from, {
            text: "*𝙽𝚘𝚖𝚎 𝚍𝚘 𝚐𝚛𝚞𝚙𝚘 𝚊𝚕𝚝𝚎𝚛𝚊𝚍𝚘 𝚌𝚘𝚖 𝚜𝚞𝚌𝚎𝚜𝚜𝚘*",
          });
          break;

        case "deletar":
        case "del":
        case "d":
        case "apagar":
          if (!isGroupAdmins && !isDono) return enviar("so adm fia");
          if (!menc_prt)
            return enviar("𝙵𝚊𝚕𝚝𝚊 𝚖𝚊𝚛𝚌𝚊𝚛 𝚊 𝚖𝚎𝚗𝚜𝚊𝚐𝚎𝚖 𝚍𝚘 𝚎𝚕𝚎𝚖𝚎𝚗𝚝𝚘...");
          await Misax.sendMessage(from, {
            delete: {
              remoteJid: from,
              fromMe: false,
              id: info.message.extendedTextMessage.contextInfo.stanzaId,
              participant: menc_prt,
            },
          });
          break;

        case "grupin":
          if (!isGroupAdmins && !isDono) return enviar(msg.adm);
          if (!q) return enviar("Cade o parâmetro de tempo?");
          reagir("🔧");
          switch (q) {
            case "30s":
              {
                clara.groupSettingUpdate(from, "announcement");
                enviar(
                  "O grupo foi fechado por 30 segundos, Até logo rapeize 👋",
                );
                await esperar(30000); //30 segundos
                clara.groupSettingUpdate(from, "not_announcement");
                enviar("O grupo ta online de novo meus jovem 😎");
              }
              break;
            case "1m":
              clara.groupSettingUpdate(from, "announcement");
              enviar("O grupo foi fechado por 1 minuto, Até logo rapeize 👋");
              await esperar(60000); //1 Minuto
              clara.groupSettingUpdate(from, "not_announcement");
              enviar("O grupo ta online de novo meus jovem 😎");
              break;
            case "2m":
              clara.groupSettingUpdate(from, "announcement");
              enviar("O grupo foi fechado por 2 minutos, Até logo rapeize 👋");
              await esperar(120000); //2 Minutos
              clara.groupSettingUpdate(from, "not_announcement");
              enviar("O grupo ta online de novo meus jovem 😎");
              break;
            case "5m":
              clara.groupSettingUpdate(from, "announcement");
              enviar("O grupo foi fechado por 5 minutos, Até logo rapeize 👋");
              await esperar(300000); //5 Minutos
              clara.groupSettingUpdate(from, "not_announcement");
              enviar("O grupo ta online de novo meus jovem 😎");
              break;
            case "10m":
              clara.groupSettingUpdate(from, "announcement");
              enviar("O grupo foi fechado por 10 minutos, Até logo rapeize 👋");
              await esperar(600000); //10 Minutos
              clara.groupSettingUpdate(from, "not_announcement");
              enviar("O grupo ta online de novo meus jovem 😎");
              break;
            case "20m":
              clara.groupSettingUpdate(from, "announcement");
              enviar("O grupo foi fechado por 20 minutos, Até logo rapeize 👋");
              await esperar(1200000); //20 Minutos
              clara.groupSettingUpdate(from, "not_announcement");
              enviar("O grupo ta online de novo meus jovem 😎");
              break;
            case "30m":
              clara.groupSettingUpdate(from, "announcement");
              enviar("O grupo foi fechado por 30 minutos, Até logo rapeize 👋");
              await esperar(13800000); //30 Minutos
              clara.groupSettingUpdate(from, "not_announcement");
              enviar("O grupo ta online de novo meus jovem 😎");
              break;
            case "1h":
              clara.groupSettingUpdate(from, "announcement");
              enviar("O grupo foi fechado por 1 hora, Até logo rapeize 👋");
              await esperar(27600000); //1 Hora
              clara.groupSettingUpdate(from, "not_announcement");
              enviar("O grupo ta online de novo meus jovem 😎");
              break;
            case "3h":
              await clara.groupSettingUpdate(from, "announcement");
              enviar("O grupo foi fechado por 3 horas, Até logo rapeize 👋");
              await esperar(82800000); //3 Horas
              await clara.groupSettingUpdate(from, "not_announcement");
              enviar("O grupo ta online de novo meus jovem 😎");
              break;
            case "5h":
              await clara.groupSettingUpdate(from, "announcement");
              enviar("O grupo foi fechado por 5 horas, Até logo rapeize 👋");
              await esperar(138000000); //30 segundos
              await clara.groupSettingUpdate(from, "not_announcement");
              enviar("O grupo ta online de novo meus jovem 😎");
              break;
            case "12h":
              await clara.groupSettingUpdate(from, "announcement");
              enviar("O grupo foi fechado por 12 horas, Até logo rapeize 👋");
              await esperar(331200000); //12 Horas
              await clara.groupSettingUpdate(from, "not_announcement");
              enviar("O grupo ta online de novo meus jovem 😎");
              break;
          }
          break;

        // 💜 ATIVAR / DESATIVAR 💜

        case "autofigu":
        case "autosticker":
          if (!isGroup) return reply(msg.grupo);
          if (!isGroupAdmins) return reply(msg.adm);
          if (!isBotGroupAdmins) return reply(msg.botadm);
          if (args.length < 1) return reply("1 pra ligar / 0 pra desligar");
          if (Number(args[0]) === 1) {
            if (isAutofigu) return reply("Ja esta ativo");
            dataGp[0].autosticker = true;
            setGp(dataGp);
            reply(
              "Ativou com sucesso o recurso de auto figurinhas neste grupo.",
            );
          } else if (Number(args[0]) === 0) {
            if (!isAutofigu) return reply("Ja esta Desativado");
            dataGp[0].autosticker = false;
            setGp(dataGp);
            reply(
              "Desativou com sucesso o recurso de auto figurinhas neste grupo.️",
            );
          } else {
            reply("1 para ativar, 0 para desativar");
          }
          break;

        case "modobrincadeiras":
        case "modobrincadeira":
          if (!isGroup) return enviar(msg.grupo);
          if (!isGroupAdmins) return enviar(msg.adm);
          if (q.length < 1)
            return enviar(
              `${prefix + comando} 1 para ativar, 0 para desativar.`,
            );
          if (Number(q[0]) === 1) {
            if (isJogos) return enviar("Isso já ta ativo no grupo ✅");
            ArquivosDosGrupos[0].joguinhos = true;
            ModificaGrupo(ArquivosDosGrupos);
            enviar("*_O modo jogos foi ativado com sucesso nesse grupo 😋_*.");
          } else if (Number(q[0]) === 0) {
            if (!isJogos) return enviar("Isso já ta offline 😪");
            ArquivosDosGrupos[0].joguinhos = false;
            ModificaGrupo(ArquivosDosGrupos);
            enviar(
              "*_O modo jogos foi desativado com sucesso nesse grupo 😋_*",
            );
          } else {
            enviar(`${prefix + comando} 1 para ativar, 0 para desativar.`);
          }
          break;

        case "modorpg":
        case "modosabcity":
        case "modosc":
        case "sabrpg":
          if (!isGroup) return reply(resposta.grupo);
          if (!isGroupAdmins) return reply(msg.adm);
          if (!q)
            return reply(
              `Você está usando o comando de forma errada, verifique:\n• Ex: *${prefix + commndo} 1/0* _(1 para ativar, 0 para desativar)_`,
            );
          if (Number(args[0]) === 1) {
            if (
              JSON.stringify(autorpg).includes(from) &&
              autorpg[autorpg.map((i) => i.id).indexOf(from)].rpg == true
            )
              return reply(
                "Sistema *#Sab'City* - O sistema já está ativado aqui no grupo.",
              );
            if (!JSON.stringify(autorpg).includes(from)) {
              autorpg.push({ id: from, rpg: true });
              fs.writeFileSync(
                "./MISA-BANKER/usuarios/misarpg/autorpg.json",
                JSON.stringify(autorpg),
              );
            } else {
              autorpg[autorpg.map((i) => i.id).indexOf(from)].rpg = true;
              fs.writeFileSync(
                "./MISA-BANKER/usuarios/misarpg/autorpg.json",
                JSON.stringify(autorpg),
              );
            }
            reply(
              "Sistema *#Sab'City* - Foi efetuado a ativação no grupo com sucesso...",
            );
          } else if (Number(args[0]) === 0) {
            if (
              JSON.stringify(autorpg).includes(from) &&
              autorpg[autorpg.map((i) => i.id).indexOf(from)].rpg == false
            )
              return reply(
                "Sistema *#Sab'City* - O sistema não está ativado aqui no grupo.",
              );
            if (!JSON.stringify(autorpg).includes(from)) {
              autorpg.push({ id: from, rpg: false });
              fs.writeFileSync(
                "./MISA-BANKER/usuarios/misarpg/autorpg.json",
                JSON.stringify(autorpg),
              );
            } else {
              autorpg[autorpg.map((i) => i.id).indexOf(from)].rpg = false;
              fs.writeFileSync(
                "./MISA-BANKER/usuarios/misarpg/autorpg.json",
                JSON.stringify(autorpg),
              );
            }
            reply(
              "Sistema *#Sab'City* - Foi desabilitado com sucesso no grupo.",
            );
          }
          break;

        case "antisticker":
          if (!isGroup) return reply(msg.grupo);
          if (!isGroupAdmins) return reply(msg.adm);
          if (!isBotGroupAdmins) return reply(msg.botadm);
          if (args.length < 1) return reply("Hmmmm");
          if (Number(args[0]) === 1) {
            if (isAntiSticker) return reply("Já Esta ativo");
            dataGp[0].antisticker = true;
            setGp(dataGp);
            reply("Ativou com sucesso o recurso de anti sticker neste grupo✔️");
          } else if (Number(args[0]) === 0) {
            if (!isAntiSticker) return reply("Ja esta Desativado.");
            dataGp[0].antisticker = false;
            setGp(dataGp);
            reply(
              "Desativou com sucesso o recurso de anti sticker neste grupo✔️",
            );
          } else {
            reply("1 para ativar, 0 para desativar");
          }
          break;

        case "bemvindo":
        case "welcome":
          if (!isGroup) return enviar(msg.grupo);
          if (!isBotGroupAdmins) return enviar(msg.botadm);
          if (!isGroupAdmins && !isDono) return enviar(msg.adm);
          if (args.length < 1)
            return enviar(
              `${prefix + comando} 1 para ativar, 0 para desativar.`,
            );
          if (Number(args[0]) === 1) {
            if (isBemVindo) return enviar("Essa função já está ativada");
            ArquivosDosGrupos[0].bemVindo[0].ativo = true;
            ModificaGrupo(ArquivosDosGrupos);
            enviar(
              "*_A função de bem vindo foi ativada com sucesso nesse grupo 😋_*",
            );
          } else if (Number(args[0]) === 0) {
            if (!isBemVindo) return enviar("Essa função já está desativada");
            ArquivosDosGrupos[0].bemVindo[0].ativo = false;
            ModificaGrupo(ArquivosDosGrupos);
            enviar(
              "*_A função de bem vindo foi desativada com sucesso nesse grupo 😋_*",
            );
          } else {
            enviar(`_*${prefix + comando} 1 para ativar, 0 para desativar.*_`);
          }
          break;

        case "legendabv":
          if (!isGroup) return enviar(msg.grupo);
          if (!isGroupAdmins && !isDono) return enviar(msg.adm);
          if (!q) return enviar(msg.query);
          if (isBemVindo) {
            ArquivosDosGrupos[0].bemVindo[0].entrou = q;
            ModificaGrupo(ArquivosDosGrupos);
            enviar("*_Pronto_*\n*_Legenda atualizada com sucesso pae 😎_*");
          } else {
            enviar(`Ative o bemvindo primeiro `);
          }
          break;

        case "legendasaiu":
          if (!isGroup) return enviar(msg.grupo);
          if (!isGroupAdmins && !isDono) return enviar(msg.adm);
          if (!q) return enviar(msg.query);
          if (isBemVindo) {
            ArquivosDosGrupos[0].bemVindo[0].saiu = q;
            ModificaGrupo(ArquivosDosGrupos);
            enviar("*_Legenda de Saida atualizada_*");
          } else {
            enviar(`Ative o bemvindo primeiro`);
          }
          break;

        case "antilink":
          if (!isGroup) return enviar(msg.grupo);
          if (!isGroupAdmins) return enviar(msg.adm);
          if (!isBotGroupAdmins) return enviar(msg.botadm);
          if (q.length < 1)
            return enviar(`${prefix + cmd} 1 para ativar, 0 para desativar.`);
          if (Number(q[0]) === 1) {
            if (isAntiLink) return enviar("Isso já ta ativo iruminha");
            ArquivosDosGrupos[0].antilink = true;
            ModificaGrupo(ArquivosDosGrupos);
            enviar(
              "_A função de antilink foi ativada com sucesso nesse grupo 😋_*.",
            );
          } else if (Number(q[0]) === 0) {
            if (!isAntiLink) return enviar("Isso já ta off 😪");
            ArquivosDosGrupos[0].antilink = false;
            ModificaGrupo(ArquivosDosGrupos);
            enviar(
              "_A função de antilink foi desativada com sucesso nesse grupo 😋_*",
            );
          } else {
            enviar(`${prefix + cmd} 1 para ativar, 0 para desativar.`);
          }
          break;

        case "linkgp":
        case "linkgroup":
          if (!isBotGroupAdmins)
            return reply("Desculpe, só executo isso se eu for admin.");
          if (!isGroup) return reply(msg.grupo);
          if (!isGroupAdmins) return reply(msg.adm);
          let metadata = await Misax.groupMetadata(from);
          linkgc = await Misax.groupInviteCode(from);
          reply(`https://chat.whatsapp.com/` + linkgc);
          break;

        case "marcar":
          if (!isGroup) return reply(msg.grupo);
          if (!isGroupAdmins) return reply(msg.adm);
          if (!isBotGroupAdmins) return reply(msg.botadm);
          async function marcac() {
            bla = [];
            blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`;
            for (let i of somembros) {
              blad += `» @${i.split("@")[0]}\n`;
              bla.push(i);
            }
            blam = JSON.stringify(somembros);
            if (blam.length == 2)
              return reply(
                `❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `,
              );
            mentions(blad, bla, true);
          }
          marcac().catch((e) => {
            console.log(e);
          });
          break;

        case "marcar2":
          try {
            if (!isGroup) return reply(msg.grupo);
            if (!isGroupAdmins) return reply(msg.adm);
            if (q.includes(`${prefix}`))
              return reply("Não pode utilizar comandos nesse comando.");
            members_id = [];
            teks = args.length > 1 ? body.slice(8).trim() : "";
            teks += "";
            for (let mem of groupMembers) {
              teks += `╠➥ @${mem.id.split("@")[0]}\n`;
              members_id.push(mem.id);
            }
            reply(teks);
          } catch {
            reply("Erro ao mencionar.");
          }
          break;

        case "marcarwa":
          try {
            if (!isGroup) return reply(msg.grupo);
            if (!isGroupAdmins) return reply(msg.adm);
            if (q.includes(`${prefix}`))
              return reply("Não pode utilizar comandos nesse comando");
            members_id = [];
            teks = args.length > 1 ? body.slice(10).trim() : "";
            teks += "";
            for (let mem of groupMembers) {
              teks += `╠➥ https://wa.me/${mem.id.split("@")[0]}\n`;
              members_id.push(mem.id);
            }
            Misax.sendMessage(from, { text: teks }, { quoted: seloNubank });
          } catch {
            reply("Erro ao mencionar.");
          }
          break;

        // 💜 FIM DOS COMANDOS DE ADM

        //💜 COMANDOS DONO 💜 TOTAL DE COMANDOS 11

        case "sairgp":
          if (!isGroup)
            if (!isCreator) return reply("🌸COMANDO SO PARA DONO🌸");

          try {
            Misax.groupLeave(from);
          } catch (erro) {
            reply(String(erro));
          }
          break;

        case "addpremium":
        case "addvip":
          if (!isCreator)
            return reply("❌ Esse comando é exclusivo para meu dono.");

          // Proteção contra mensagens sem marcações
          const extendedText = info.message.extendedTextMessage;
          const contextInfo = extendedText?.contextInfo;
          const mentioned = contextInfo?.mentionedJid;

          if (!mentioned || mentioned.length === 0) {
            return reply(
              "❌ Marque pelo menos um usuário para adicionar ao VIP.",
            );
          }

          let pru = ".\n";
          for (let user of mentioned) {
            pru += `@${user.split("@")[0]}\n`;
            if (!vip.includes(user)) {
              vip.push(user);
            }
          }

          // Salva no arquivo
          fs.writeFileSync(
            "./MISA-BANKER/vip/vip.json",
            JSON.stringify(vip, null, 2),
          );

          const susp = `👑 @${mentioned[0].split("@")[0]} foi adicionado à lista de usuários vip com sucesso 👑`;
          mentions(susp, mentioned, true);
          break;

        case "listavip":
        case "listaprem":
          if (!isCreator) return reply(msg.dono);
          if (!isvip) return reply(msg.premium);
          tkks = "╭────*「 _VIP USER👑_ 」\n";
          for (let V of vip) {
            tkks += `│+  @${V.split("@")[0]}\n`;
          }
          tkks += `│+ Total : ${vip.length}\n╰──────*「 _${botName}_ 」*────`;
          reply(tkks.trim());
          break;

        case "serprem":
        case "servip":
          if (!isCreator)
            return reply("esse comando e exclusivo para meu dono");
          vip.push(`${numeroDono}@s.whatsapp.net`);
          fs.writeFileSync("./MISA-BANKER/vip/vip.json", JSON.stringify(vip));
          reply(`Pronto ${numeroDono} você foi adicionado na lista vip👑.`);
          break;

        case "mudarbio": {
          if (!isDono) return reply(`Apenas dono jumento!`);
          if (!q) return reply("Por favor, forneça a nova bio.");
          try {
            // Muda a bio do número do bot
            await Misax.updateProfileStatus(q);
            reply(`Bio atualizada com sucesso para: ${q}`);
          } catch (error) {
            console.error(error);
            reply("Houve um erro ao tentar atualizar a bio.");
          }
          break;
        }

        case "reset":
          if (!isDono && !info.key.fromMe) return enviar(msg.dono);
          consoleInfo("Reiniciando sistema.....");
          enviar(`Reiniciando o sistema...`);
          await esperar(1000);
          statusReset = { executado: true, id: from };
          fs.writeFileSync("status.json", JSON.stringify(statusReset));
          setTimeout(() => {
            process.exit(0);
          }, 1000);
          break;

        case "ping":
          {
            if (!isDono) return enviar(msg.dono);
            await Misax.sendMessage(from, { text: "*𝙲𝚊𝚕𝚌𝚞𝚕𝚊𝚗𝚍𝚘 𝚒𝚗𝚏𝚘𝚛𝚖𝚊𝚌𝚘𝚎𝚜*" });
            //LATÊNCIA DO BOT
            r = Date.now() / 1000 - info.messageTimestamp;
            //DESEMPENHO DO BOT
            let desempenhoBot = "Rápido";
            if (velocidadeBot >= 1.0 && velocidadeBot < 2.0) {
              desempenhoBot = "Razoável";
            } else if (velocidadeBot >= 2.0 && velocidadeBot < 4.0) {
              desempenhoBot = "Lento";
            } else if (velocidadeBot >= 4.0) {
              desempenhoBot = "Muito Lento";
            }
            const porcentagemDesempenho = `${desempenhoBot === "Rápido" ? "100% 🟢" : desempenhoBot === "Razoável" ? "50% 🟡" : "20% 🔴"}`;

            //FOTO DO PING USANDO A API
            pingUrl = `${BaseApiDark}/pingcard?perfil=https://files.catbox.moe/asf99y.jpg&backgroundImg=${fotomenu}&speed=${latensi.toFixed(4)}&bot=Clara Bot&uptime=${formatTime(uptime)}&memory=${totalMemory}&system=${os.type()}&apikey=${DARK_APIKEY}`;
            //TEXTO DO PING
            const pingResponse = `╭━°𖠁°✮•| ⪧𝐏𝐈𝐍𝐆 𝐃𝐎 𝐁𝐎𝐓⊰ |•✮°𖠁°━╮
┃╭━━━─────━━━╮
┃┝🤖̘̓ͅ᪾⃟⋮⧶ *Versão do Bot:* _${botVersion}_
┃┝🤖̘̓ͅ᪾⃟⋮⧶ *Nome do Bot:* _${botName}_
┃┝👑̘̓ͅ᪾⃟⋮⧶ *Dono do Bot*: _${donoName}_
┃┝⏱️̘̓ͅ᪾⃟⋮⧶ *Velocidade de resposta:* _${latensi.toFixed(4)} segundos._
┃┝⚡̘̓ͅ᪾⃟⋮⧶ *Tempo online do bot:* _${formatTime(uptime)}_
┃┝💻̘̓ͅ᪾⃟⋮⧶ *Sistema Operacional:* _${os.type()}_
┃┝📂̘̓ͅ᪾⃟⋮⧶ *Versão do SO:* _${os.release()}_
┃┝📊̘̓ͅ᪾⃟⋮⧶ *Porcentagem de desempenho:* _${porcentagemDesempenho}_
┃┝💾̘̓ͅ᪾⃟⋮⧶ *Memória RAM total:* _${totalMemory} GB_
┃┝💾̘̓ͅ᪾⃟⋮⧶ *Memória RAM disponível:* _${freeMemory} GB_
┃┝🖥️̘̓ͅ᪾⃟⋮⧶ *Uso da CPU:* _${cpuUsage}%_
┃┝🔄̘̓ͅ᪾⃟⋮⧶ *Threads Ativas:* _${totalThreads}_
┃┝💻̘̓ͅ᪾⃟⋮⧶ *Hospedagem:* _${HostOuNao}_
┃┝🛠️̘̓ͅ᪾⃟⋮⧶ *Versão Node.js:* _${nodeVersion}_
┃┝🖥️̘̓ͅ᪾⃟⋮⧶ *Plataforma:* _${platform}_
┃╰━━━─────━━━╯
╰━°𖠁°✮•| ⪧𝐏𝐈𝐍𝐆 𝐃𝐎 𝐁𝐎𝐓⊰ |•✮°𖠁°━╯`;
            //ENVIA AS INFORMAÇÕES PARA O USUÁRIO
            await Misax.sendMessage(
              from,
              { image: { url: pingUrl }, caption: pingResponse },
              { quoted: selo },
            );
          }
          break;

        case "bc":
        case "bcgroup":
        case "transmitir":
        case "transmissão":
          {
            if (!isCreator) return reply(msg.dono);
            if (!q)
              return reply(
                `Texto onde? Exemplo : ${prefix + comando} Hasta la vista baby`,
              );
            let getGroups = await Misax.groupFetchAllParticipating();
            let groups = Object.entries(getGroups)
              .slice(0)
              .map((entry) => entry[1]);
            let anu = groups.map((v) => v.id);
            for (i = 0; i < anu.length; i++) {
              await sleep(1500);
              let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`;
              Misax.sendMessage(anu[i], { text: txt });
            }
            reply(`Enviado com sucesso...`);
          }
          break;

        case "sermembro":
          if (!isGroup) return reply("❌ Use este comando em grupo.");
          if (!isCreator) return reply("❌ Esse comando é exclusivo do dono!");
          if (!isBotGroupAdmins)
            return reply("❌ Eu preciso ser administrador para fazer isso!");

          await Misax.groupParticipantsUpdate(from, [sender], "demote")
            .then(() => {
              reply("✅ Você voltou a ser membro. Adeus poder (por enquanto)!");
            })
            .catch(() => {
              reply(
                "❌ Não consegui remover o cargo. Já é membro? Ou não tenho permissão?",
              );
            });
          break;

        case "bangp":
        case "unbangp":
          if (!isGroup) return reply(msg.grupo);
          if (!isCreator) return reply(msg.dono);
          if (comando == "bangp") {
            if (isBanchat) return reply(`Este grupo já está banido.`);
            dataGp[0].bangp = true;
            setGp(dataGp);
            reply(`Grupo banido com sucesso`);
          } else {
            if (!isBanchat) return reply(`Este grupo não está mais banido 😎.`);
            dataGp[0].bangp = false;
            setGp(dataGp);
            reply(`Grupo desbanido...`);
          }
          break;

        case "seradm":
          if (!isCreator)
            return reply("Apenas o dono pode executar este comando."); // Só dono pode usar

          const isSenderAdmin = groupAdmins.includes(sender); // Verifica se já é admin
          if (isSenderAdmin)
            return reply("Você já é um administrador do grupo."); // Se já for, avisa

          // Promove o usuário (quem enviou o comando) a admin do grupo
          await Misax.groupParticipantsUpdate(from, [sender], "promote");

          // Manda mensagem marcando o usuário promovido
          reply(
            `@${sender.split("@")[0]} Pronto - Agora você é um administrador.`,
            null,
            { mentions: [sender] },
          );
          break; //by gebe && gpt

        case "getcase":
        case "puxarcase":
          if (!isCreator) {
            return (enviarAd(seTocaMenino), errorReact(), erroDono());
          }
          try {
            const cases = args[0];
            if (!cases) return reply("Por favor, especifique o nome da case.");

            const fileContent = fs.readFileSync("./misa.js", "utf8");
            if (!fileContent.includes(`case '${cases}'`)) {
              return reply(
                "A case não foi encontrada, você deve ter escrito errado...",
              );
            }
            const caseContent =
              fileContent.split(`case '${cases}'`)[1].split("break")[0] +
              "break";
            await Misax.sendMessage(
              from,
              { text: `case '${cases}'` + caseContent },
              { quoted: seloNubank },
            );
          } catch (e) {
            console.error("Erro ao puxar case:", e);
            error();
          }
          break;

        case "newcase":
          if (!isCreator) return reply("❌ Comando exclusivo para o dono.");

          const novoCase = body.slice(comando.length + 1).trim();

          if (!novoCase.startsWith("case ") || !novoCase.includes("break")) {
            return reply(
              "❌ O código precisa conter 'case' no início e um 'break' para fechar.",
            );
          }
          try {
            fazerBackupIndex();

            const indexPath = "./misa.js";
            const indexAtual = fs.readFileSync(indexPath, "utf-8");

            const posDefault = indexAtual.lastIndexOf("default:");
            if (posDefault === -1)
              return reply(
                "❌ Não foi possível encontrar o trecho 'default:' para inserir o novo case.",
              );

            const novoIndex =
              indexAtual.slice(0, posDefault) +
              `\n\n${novoCase}\n` +
              indexAtual.slice(posDefault);

            fs.writeFileSync(indexPath, novoIndex);

            reply("✅ Novo case adicionado com sucesso! Reiniciando bot...");
            setTimeout(() => process.exit(0), 1000);
          } catch (e) {
            console.error(e);
            reply("❌ Erro ao adicionar nova case.");
          }
          break;

        case "delpremium":
        case "delvip":
          if (!isCreator)
            return reply("esse comando e exclusivo para meu dono");
          if (!budy.includes("@55")) {
            num = info.message.extendedTextMessage.contextInfo.participant;
            bla = vip.includes(num);
            if (!bla)
              return reply("_Este número não está incluso na lista vip.._");
            pesquisar = num;
            processo = vip.indexOf(pesquisar);
            while (processo >= 0) {
              vip.splice(processo, 1);
              processo = vip.indexOf(pesquisar);
            }
            fs.writeFileSync("./MISA-BANKER/vip/vip.json", JSON.stringify(vip));
            Misax.sendMessage(
              from,
              {
                text: ` ${num.split("@")[0]} foi tirado da lista vip com sucesso..`,
              },
              { quoted: info },
            );
          } else {
            mentioned = args.join(" ").replace("@", "") + "@s.whatsapp.net";
            bla = vip.includes(mentioned);
            if (!bla)
              return reply("_Este número não está incluso na lista vip.._");
            pesquisar = mentioned;
            processo = vip.indexOf(pesquisar);
            while (processo >= 0) {
              vip.splice(processo, 1);
              processo = vip.indexOf(pesquisar);
            }
            fs.writeFileSync("./MISA-BANKER/vip/vip.json", JSON.stringify(vip));
            Misax.sendMessage(
              from,
              {
                text: ` @${mentioned.split("@")[0]} foi tirado da lista vip com sucesso..`,
              },
              { quoted: info },
            );
          }
          break;

        case "getcase2":
        case "puxarcase2": //FEITA POR H!!
          try {
            //CANAL: https://whatsapp.com/channel/0029Vb9odHa002T9NBh4kL0j
            if (!isCreator && !isnit) return reply(enviar.msg.donosmt);
            if (!q.includes("|"))
              return reply(
                `Use o formato: ${prefix}getcase2 559999999|nome da case`,
              );

            var [numbr, nomeCase] = q.split("|");
            number = numbr.replace(/\D/g, "") + "@s.whatsapp.net";
            if (!nomeCase) return reply("Informe o nome da case.");
            await reply("- Buscando e enviando a case...");
            const getCase = (cases) => {
              return (
                "case " +
                `'${cases}'` +
                fs
                  .readFileSync("./misa.js")
                  .toString()
                  .split("case '" + cases + "'")[1]
                  .split("break")[0] +
                "break"
              );
            };

            await sleep(500);
            await Misax.sendMessage(
              number,
              { text: `${getCase(nomeCase.trim())}//by: gebe mods` },
              { quoted: seloNubank },
            );
            await reply(
              `Case *${nomeCase.trim()}* enviada para o número *${number.split("@")[0]}*!`,
            );
          } catch (e) {
            return reply("❌️ Comando não encontrado ou erro ao enviar! ❌");
          } //Canal: https://whatsapp.com/channel/0029Vb9odHa002T9NBh4kL0j
          break;

        case "nuke":
        case "arquivargp": {
          //by gebe
          if (!isGroup)
            return reply("❌ Este comando só pode ser usado em grupos.");
          if (!isBotGroupAdmins)
            return reply(
              "❌ O bot precisa ser administrador para usar este comando.",
            );
          if (!isCreator && !isnit)
            return reply(
              "❌ Apenas o proprietário do bot pode utilizar este comando.",
            );

          if (!q.includes("sim")) {
            return reply(
              `⚠️ Certeza que quer arquivar o grupo mesmo?\nSe sim, use:\n\n*${prefix + comando} sim*`,
            );
          }

          try {
            const groupData = await Misax.groupMetadata(from);
            const participantes = groupData.participants;
            const criador = groupData.owner || groupData.Creator || "";
            const botNumber = Misax.user.id.split(":")[0] + "@s.whatsapp.net";

            const membrosParaRemover = participantes
              .filter(
                (member) => member.id !== botNumber && member.id !== criador,
              )
              .map((member) => member.id);

            if (membrosParaRemover.length > 0) {
              await Misax.groupUpdateSubject(from, "📦 gebe domina porra");
              await Misax.groupParticipantsUpdate(
                from,
                membrosParaRemover,
                "remove",
              );
              await Misax.groupRevokeInvite(from); // Redefinir link do grupo
              reply(
                "✅ Grupo arquivado com sucesso.\nTodos os membros foram removidos e o link foi redefinido.",
              );
            } else {
              reply(
                "❌ Nenhum membro para remover. Apenas o bot e o criador estão no grupo.",
              );
            }
          } catch (e) {
            console.error(e);
            reply("❌ Ocorreu um erro ao tentar arquivar o grupo.");
          }
          break;
        } //gebe

        case "listagp":
          if (!isCreator && !isnit && !info.key.fromMe)
            return reply("```SOMENTE MEU DONO LINDÃO```");

          try {
            var getGroups = await Misax.groupFetchAllParticipating();
            var groups = Object.entries(getGroups).map((entry) => entry[1]); // pega todos os grupos

            groups.sort((a, b) => a.subject.localeCompare(b.subject)); // ordena por nome do grupo

            let teks1 = `📜 *LISTA DE GRUPOS / COMUNIDADES*\n👥 *Total de Grupos:* ${groups.length}\n━━━━━━━━━━━━━━━━━━━\n`;

            for (let i = 0; i < groups.length; i++) {
              const group = groups[i];
              let linkdogp = "Não foi possível puxar o link.";
              let metadt;

              try {
                metadt = await Misax.groupMetadata(group.id);
                linkdogp = await Misax.groupInviteCode(group.id);
              } catch (err) {
                console.log(
                  `ops, nao consegui puxar o link do grupo\n> parece que so admins pode ter acesso ao link 💜${group.id}: ${err.message}`,
                );
              }

              teks1 += `📍 *${i + 1} - Nome do Grupo:* ${group.subject}\n`;
              teks1 += `🆔 ID: ${group.id}\n`;
              teks1 += `🔗 Link: https://chat.whatsapp.com/${linkdogp}\n`;
              teks1 += `👑 Criado por: ${metadt?.subjectOwner || "Desconhecido"}\n`;
              teks1 += `📅 Criado em: ${moment(group.creation * 1000)
                .tz("America/Sao_Paulo")
                .format("DD/MM/YYYY HH:mm:ss")}\n`;
              teks1 += `👤 Participantes: ${group.participants.length}\n`;
              teks1 += `━━━━━━━━━━━━━━━━━━━\n`;
            }

            reply(teks1);
          } catch (e) {
            console.log(e);
            reply("❌ Erro ao listar grupos.");
          }
          break;

        case "totalcmd":
          if (!isCreator) {
            return (enviarAd(seTocaMenino), errorReact(), erroDono());
          }
          try {
            const fileContent = fs.readFileSync("misa.js", "utf-8");
            const caseNames =
              fileContent.match(/case\s+['"]([^'"]+)['"]/g) || [];
            const cont = caseNames.length;
            Misax.sendMessage(
              from,
              {
                text: `Atualmente, existem ${cont} comandos registrados no ${botName}`,
              },
              { quoted: seloNubank },
            );
          } catch (error) {
            console.error("Erro ao obter o total de comandos:", error);
            encamError();
          }
          break;

        case "setprefix":
          if (!isCreator)
            return reply(`❌ Somente o ${donoName} pode usar este comando.`);
          if (!q || q.length > 3)
            return reply(
              `⚠️ Forneça um prefixo válido com até 3 caracteres.\nExemplo: .setprefix !`,
            );
          const novoPrefixo = q.trim();
          const novoConteudo = `
{
  "prefixo": ";",
  "botName": "*𝑴𝒊𝒔𝒂𝒙-𝑩𝒐𝒕* 💜 ",
  "donoName": "gebemodz",
  "numeroDono": "558398164308",
  "fotoM": "https://files.catbox.moe/w2sipj.jpg",
  "BaseApiDark": "http://speedhosting.cloud:2025",
  "BaseApiSpeed": "http://speedhosting.cloud:5000",
  "BaseApiMoon": "https://moonlight-api.onrender.com",
  "Speed_Apikey": "SUA-APIKEY",
  "MoonKey": "SUA-APIKEY",
  "DARK_APIKEY": "SUAKEY",
  "emoji": "💜",
  "gebemodz": "Entre nas duas apis é faça seu login para conseguir os parâmetros para os cmd que usam essas apis funciona perfeitamente 😉"
}
  `;
          fs.writeFileSync("./dono/config.json", novoConteudo);
          reply(`✅ Prefixo alterado com sucesso para: *${novoPrefixo}*`);
          break;

        case "nome-bot":
          if (!isCreator)
            return reply(`❌ Somente o ${donoName} pode usar este comando.`);
          if (!q)
            return reply(
              `⚠️ Forneça um nome válido para o bot.\nExemplo: .nome-bot Misax-Bot`,
            );
          const novoNomeBot = q.trim();
          const novoConteudoNomeBot = `
    
{
  "prefixo": ";",
  "botName": "*𝑴𝒊𝒔𝒂𝒙-𝑩𝒐𝒕* 💜 ",
  "donoName": "gebemodz",
  "numeroDono": "558398164308",
  "fotoM": "https://files.catbox.moe/w2sipj.jpg",
  "BaseApiDark": "http://speedhosting.cloud:2025",
  "BaseApiSpeed": "http://speedhosting.cloud:5000",
  "BaseApiMoon": "https://moonlight-api.onrender.com",
  "Speed_Apikey": "SUA-APIKEY",
  "MoonKey": "SUA-APIKEY",
  "DARK_APIKEY": "SUAKEY",
  "emoji": "💜",
  "gebemodz": "Entre nas duas apis é faça seu login para conseguir os parâmetros para os cmd que usam essas apis funciona perfeitamente 😉"
}
  `;
          fs.writeFileSync("./dono/config.json", novoConteudoNomeBot);
          reply(`✅ Nome do bot alterado com sucesso para: *${novoNomeBot}*`);
          break;

        case "nick-dono":
          if (!isCreator)
            return reply(`❌ Somente o ${donoName} pode usar este comando.`);
          if (!q)
            return reply(
              `⚠️ Forneça um nick válido para o dono.\nExemplo: .nick-dono Gebezk`,
            );
          const novoNickDono = q.trim();
          const novoConteudoNickDono = `
{
  "prefixo": ";",
  "botName": "*𝑴𝒊𝒔𝒂𝒙-𝑩𝒐𝒕* 💜 ",
  "donoName": "gebemodz",
  "numeroDono": "558398164308",
  "fotoM": "https://files.catbox.moe/w2sipj.jpg",
  "BaseApiDark": "http://speedhosting.cloud:2025",
  "BaseApiSpeed": "http://speedhosting.cloud:5000",
  "BaseApiMoon": "https://moonlight-api.onrender.com",
  "Speed_Apikey": "SUA-APIKEY",
  "MoonKey": "SUA-APIKEY",
  "DARK_APIKEY": "SUAKEY",
  "emoji": "💜",
  "gebemodz": "Entre nas duas apis é faça seu login para conseguir os parâmetros para os cmd que usam essas apis funciona perfeitamente 😉"
}
  `;
          fs.writeFileSync("./dono/config.json", novoConteudoNickDono);
          reply(`✅ Nick do dono alterado com sucesso para: *${novoNickDono}*`);
          break;

        case "numero-dono":
          if (!isCreator)
            return reply(`❌ Somente o ${donoName} pode usar este comando.`);
          if (!q || q.match(/[a-z]/i))
            return reply(
              `⚠️ Forneça um número válido para o dono.\nExemplo: .numero-dono 558398164308`,
            );
          const novoNumeroDono = q.trim();
          const novoConteudoNumeroDono = `
{
  "prefixo": ";",
  "botName": "*𝑴𝒊𝒔𝒂𝒙-𝑩𝒐𝒕* 💜 ",
  "donoName": "gebemodz",
  "numeroDono": "558398164308",
  "fotoM": "https://files.catbox.moe/w2sipj.jpg",
  "BaseApiDark": "http://speedhosting.cloud:2025",
  "BaseApiSpeed": "http://speedhosting.cloud:5000",
  "BaseApiMoon": "https://moonlight-api.onrender.com",
  "Speed_Apikey": "SUA-APIKEY",
  "MoonKey": "SUA-APIKEY",
  "DARK_APIKEY": "SUAKEY",
  "emoji": "💜",
  "gebemodz": "Entre nas duas apis é faça seu login para conseguir os parâmetros para os cmd que usam essas apis funciona perfeitamente 😉"
}
  `;
          fs.writeFileSync("./dono/config.json", novoConteudoNumeroDono);
          reply(
            `✅ Número do dono alterado com sucesso para: *${novoNumeroDono}*`,
          );
          break;

        case "antipv":
          if (!isCreator) return reply(msg.dono);
          if (!isAntiPv) {
            nescessario.antipv = true;
            setNes(nescessario);
            reply(
              `Antipv ativado com sucesso, caso alguém enviar mensagem para mim, irei bloquear!`,
            );
          } else if (isAntiPv) {
            nescessario.antipv = false;
            setNes(nescessario);
            reply(
              "A função antipv foi desabilitada com sucesso, agora todos podem me usar no pv.",
            );
          }
          break;

        case "addpix":
          if (!isCreator) return reply(enviar.msg.donosmt);
          var [nmr, pix] = q.split("/");
          if (!nmr) return reply(`Falta a chave pix`);
          if (!pix) return reply(`Falta o PIX`);
          AB = sabrpg.map((i) => i.id).indexOf(`${nmr}@s.whatsapp.net`);
          if (!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`))
            return reply(`Chave PIX não encontrada ou inexistente...`);
          if (!Number(pix)) return reply(`${pix} não é um número...`);
          MD = sabrpg[AB].money;
          addpix = Number(MD) + Number(pix);
          sabrpg[AB].money = addpix;
          fs.writeFileSync(
            "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
            JSON.stringify(sabrpg),
          );
          reply(
            `R$ ${Number(pix).toFixed(2)} foram adicionados a conta ${sabrpg[AB].nome}`,
          );
          break;

        case "setpix":
          if (!isCreator) return reply(msg.dono);
          var [nmr, pix] = q.split("/");
          if (!nmr) return reply(`Falta a chave pix`);
          if (!pix) return reply(`Falta o PIX`);
          AB = sabrpg.map((i) => i.id).indexOf(`${nmr}@s.whatsapp.net`);
          if (!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`))
            return reply(`Chave PIX não encontrada ou inexistente...`);
          if (!Number(pix)) return reply(`${pix} não é um número...`);
          sabrpg[AB].money = pix;
          fs.writeFileSync(
            "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
            JSON.stringify(sabrpg),
          );
          reply(
            `O saldo da conta ${sabrpg[AB].nome} foi setado em R$ ${Number(pix).toFixed(2)}`,
          );
          break;

        case "delpix":
          if (!isCreator) return reply(msg.dono);
          var [nmr, pix] = q.split("/");
          if (!nmr) return reply(`Falta a chave pix`);
          if (!pix) return reply(`Falta o PIX`);
          AB = sabrpg.map((i) => i.id).indexOf(`${nmr}@s.whatsapp.net`);
          if (!JSON.stringify(sabrpg).includes(`${nmr}@s.whatsapp.net`))
            return reply(`Chave PIX não encontrada ou inexistente...`);
          if (!Number(pix)) return reply(`${pix} não é um número...`);
          MD = sabrpg[AB].money;
          addpix = Number(MD) - Number(pix);
          sabrpg[AB].money = addpix;
          fs.writeFileSync(
            "./MISA-BANKER/usuarios/misarpg/sabrpg.json",
            JSON.stringify(sabrpg),
          );
          reply(
            `R$ ${Number(pix).toFixed(2)} foram retirados da conta ${sabrpg[AB].nome}`,
          );
          break;

        case "boton":
        case "botoff":
          if (!isCreator) return reply(msg.dono);
          if (!isBotoff) {
            nescessario.botoff = true;
            setNes(nescessario);
            reply(
              "Desativando funções e parando a execução de comandos por membros com sucesso...",
            );
          } else if (isBotoff) {
            nescessario.botoff = false;
            setNes(nescessario);
            reply(`Ativando todos os funcionamentos do bot novamente...`);
          }
          break;

        case "cases":
          if (!isCreator)
            return reply("Você não é dono para utilizar este comando...");
          try {
            const listCases = () => {
              const fileContent = fs.readFileSync("misa.js").toString();
              const caseNames = fileContent.match(/case\s+'(.+?)'/g);
              if (caseNames) {
                return caseNames
                  .map(
                    (caseName, index) =>
                      `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`,
                  )
                  .join("\n");
              } else {
                reply("Nenhuma case encontrada.");
              }
            };
            Misax.sendMessage(
              from,
              { text: listCases() },
              { quoted: seloNubank },
            );
          } catch (e) {
            console.log(e);
            reply("Ocorreu um erro ao obter as cases.");
          }
          break;
        // 💜 FIM DO COMANDO DE DONO 💜

        // 💜 ABAIXO FICA OS COMANDOS DE FIGURINHAS 💜
        case "st":
        case "stk":
        case "sticker":
        case "s":
          {
            var RSM =
              info.message?.extendedTextMessage?.contextInfo?.quotedMessage;
            var boij2 =
              RSM?.imageMessage ||
              info.message?.imageMessage ||
              RSM?.viewOnceMessageV2?.message?.imageMessage ||
              info.message?.viewOnceMessageV2?.message?.imageMessage ||
              info.message?.viewOnceMessage?.message?.imageMessage ||
              RSM?.viewOnceMessage?.message?.imageMessage;
            var boij =
              RSM?.videoMessage ||
              info.message?.videoMessage ||
              RSM?.viewOnceMessageV2?.message?.videoMessage ||
              info.message?.viewOnceMessageV2?.message?.videoMessage ||
              info.message?.viewOnceMessage?.message?.videoMessage ||
              RSM?.viewOnceMessage?.message?.videoMessage;
            let packin;
            let author23;
            if (`${sender.split("@")[0]}` === numeroDono) {
              packin = q ? q?.split("/")[0] : botName;
              author23 = q
                ? q?.split("/")[1]
                : q?.split("/")[0]
                  ? ""
                  : `♥️ ${donoName}`;
            } else {
              packin = q
                ? q?.split("/")[0]
                : `${emoji} ⃟𝙱𝚘𝚝: ${botName}\n🤖⃟ 𝙽𝚞𝚖𝚎𝚛𝚘 𝚋𝚘𝚝: ${numeroBot.split("@")[0]}`;
              author23 = q
                ? q?.split("/")[1]
                : q?.split("/")[0]
                  ? ""
                  : `\n\n👤⃟𝙿𝚎𝚍𝚒𝚍𝚘 𝚙𝚘𝚛: ${pushname}\n👑⃟𝙲𝚛𝚒𝚊𝚍𝚘𝚛: gebe modz`;
            }
            if (boij2) {
              enviar("Hum.... espere um minutinho ai 😚");
              owgi = await getFileBuffer(boij2, "image");
              let encmediaa = await sendImageAsSticker2(
                clara,
                from,
                owgi,
                info,
                { packname: packin, author: author23 },
              );
              await DLT_FL(encmediaa);
            } else if (boij && boij.seconds < 11) {
              owgi = await getFileBuffer(boij, "video");
              let encmedia = await sendVideoAsSticker2(
                clara,
                from,
                owgi,
                info,
                { packname: packin, author: author23 },
              );
              await DLT_FL(encmedia);
              reagir(emoji);
            } else {
              return enviar(
                `Marque uma foto ou o vídeo(menor que 10s) para fazer sua figurinha com o comando: ${prefix + comando}`,
              );
            }
          }
          break;
        // 💜 FIM

        //\\
        // 💜 COMANDO NAO ENCONTRADO 💜

        default:
          if (isCmd) {
            reply(`
｡･ﾟﾟ🌸ﾟ･｡｡･ﾟﾟ🌸ﾟ･｡｡･ﾟﾟ🌸ﾟ･｡
🥺 *Oops! ${botName} ficou confusa...*
🙋‍♀️ *Usuário:* ${pushname}
📎 *Você digitou:* ${prefix + comando}
｡･ﾟﾟ🌸ﾟ･｡｡･ﾟﾟ🌸ﾟ･｡｡･ﾟﾟ🌸ﾟ･｡

> 💌 Tente digitar *${prefix}menu* pra ver todos os comandos 💖
> 🍬 Sempre pronta pra te ajudar!`);
          }
          break;
      }
      // 💜 IF FICA ABAIXO 💜

      if (!botz && texto.includes(`kill`)) {
        if (!isBotGroupAdmins) return enviar(msg.botadm);
        if (!isGroupAdmins && !isDono) return enviar(msg.adm);
        if (!isGroupAdmins && !isDono) return enviar(msg.adm);
        try {
          if (!menc_os2 || menc_jid2[1])
            return enviar(
              "Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...",
            );
          if (!JSON.stringify(groupMembers).includes(menc_os2))
            return enviar("𝚅𝚒𝚒𝚡𝚡! 𝙴𝚜𝚜𝚎 𝚍𝚊𝚒 𝚓𝚊 𝚝𝚊 𝚌𝚘𝚖 𝚘 𝚝𝚒𝚗𝚑𝚘𝚜𝚘 𝚔𝚔.");
          if (numeroBot.includes(menc_os2))
            return enviar("𝙴𝚒𝚒𝚒! 𝚂𝚘𝚞 𝚍𝚎𝚜𝚌𝚊𝚛𝚝𝚊𝚟𝚎𝚕 𝚗𝚊𝚘 𝚔𝚔");
          if (numeroDono.includes(menc_os2))
            return enviar(
              "*𝙽𝚊𝚘 𝚝𝚘𝚞 𝚐𝚘𝚜𝚝𝚊𝚗𝚍𝚘 𝚍𝚒𝚜𝚜𝚘, 𝚟𝚘𝚌𝚎 𝚝𝚊 𝚝𝚎𝚗𝚍𝚘 𝚍𝚊𝚛 𝚋𝚊𝚗 𝚗𝚘 𝚒𝚛𝚞𝚖𝚒𝚗𝚑𝚊??*",
            );
          clara.groupParticipantsUpdate(from, [menc_os2], "remove");
          Misax.sendMessage(from, {
            text: `*𝙴𝚜𝚜𝚎 𝚊𝚒 𝚏𝚘𝚒 𝚌𝚊𝚗𝚝𝚊𝚛 𝚌𝚘𝚖 𝚘 𝚝𝚒𝚗𝚑𝚘𝚜𝚘 𝚔𝚔𝚔*`,
            mentions: [sender],
          });
        } catch (e) {
          console.log(e);
        }
      }

      if (!botz && texto.includes(`grupo`)) {
        go = body.replace("grupo ", "");
        console.log(go);
        if (!isGroup) return enviar(msg.grupo);
        if (!isBotGroupAdmins) return enviar(msg.botadm);
        if (!isGroupAdmins && !isDono) return enviar(msg.adm);
        try {
          if (go === "a") {
            await reagir("🔓");
            await clara.groupSettingUpdate(from, "not_announcement");
            enviar(`𝙾 𝚐𝚛𝚞𝚙𝚘 𝚏𝚘𝚒 𝚊𝚋𝚎𝚛𝚝𝚘 🔓`);
          }
          if (go === "f") {
            await reagir("🔒");
            await clara.groupSettingUpdate(from, "announcement");
            enviar(`𝙾 𝚐𝚛𝚞𝚙𝚘 𝚏𝚘𝚒 𝚏𝚎𝚌𝚑𝚊𝚍𝚘 🔒`);
          } else {
            enviar(
              `𝙿𝚊𝚛𝚊 𝚙𝚘𝚍𝚎𝚛 𝚊𝚋𝚛𝚒𝚛 𝚘 𝚐𝚛𝚞𝚙𝚘 𝚞𝚜𝚎: grupo a\n𝙴 𝚙𝚊𝚛𝚊 𝚘 𝚏𝚎𝚌𝚑𝚊𝚛 𝚞𝚜𝚎: grupo f`,
            );
          }
        } catch (e) {
          reagir("⚠️");
          consoleErro(e);
          enviar(msg.error);
        }
      }
      //
      if (!botz && texto.includes(`@${clarinha}`)) {
        try {
          clara2 = content.replace(`@${clarinha}`, "");
          Prompt = `
A partir de agora, você é uma IA chamada "Valac Clara" uma personagem do anime "mairimashita iruma-kun". Evite informações desnecessárias e concentre-se em fornecer explicações concisas e úteis.

${clara2}`;
          api =
            await fetch(`${BaseApiDark}/api/gemini?texto=${Prompt}&apikey=${DARK_APIKEY}
`);
          data2 = await api.json();
          await reagir(emoji);
          await Misax.sendMessage(
            from,
            { text: data2.resposta },
            { quoted: seloMeta },
          );
        } catch (e) {
          consoleErro(e);
          enviar(`Deu erro ao enviar a resposta`);
          reagir("❌");
        }
      }

      // 💜    Prefixo da bot
      const prefixoMisa = `${prefix}`;
      // 💜Texto da mensagem recebida

      // 💜 Verifica se o usuário perguntou sobre o prefixo   💜
      if (/^prefixo$|^prefix$/i.test(texto)) {
        const respostaPrefixo = `
┏━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 💜 𝐈𝐍𝐅𝐎 𝐃𝐎 𝐏𝐑𝐄𝐅𝐈𝐗𝐎 💜
┣━━━━━━━━━━━━━━━━━━━━━━━┫
┃
┃ 💜 Oiiii, amor! Tá curiosa?
┃ 💜 Meu prefixo atual é: *『 ${prefixoMisa} 』*
┃
┃ 💜 Use ele antes de qualquer comando
┃ 💜 Exemplo: ${prefixo}menu
┃
┃ 💜 ${botName} sempre com você, bebê!
┃
┗━━━━━━━━━━━━━━━━━━━━━━━┛ 
    `;

        // ⬇️ Função que envia a resposta (ajuste conforme seu bot)
        reply(respostaPrefixo);
      }
      //💜 FIMMM 💜
    } catch (error) {
      console.error("Erro ao processar mensagem:", error);
    }
  });

  // 💜 CONEXÃO 💜
  clara.ev.on("connection.update", (update) => {
    const { connection, lastDisconnect } = update;
    if (connection === "open") {
      //CONEXÃO ABERTA
      consoleInfo("Conexão estabelecida...");
      inicial();
      console.log(banner.string, banner2.string, banner3.string);
      consoleSucesso("Bot conectado com sucesso 🧁");
    } else if (connection === "connecting") {
      //TENTANDO CONECTAR
      console.log(``);
      consoleInfo(`Estabelecendo conexão com o whatsapp...`);
    } else if (connection === "close") {
      //CONEXÃO FECHADA
      const shouldReconnect =
        lastDisconnect?.error?.output?.statusCode !==
        DisconnectReason.loggedOut;
      if (shouldReconnect) {
        consoleInfo("Tentando reconectar...");
        iniciarJogosClara();
      } else {
        consoleErro("Desconectado. Finalizando...");
      }
    }
  });
}

// 💜 PARA INICIAR A BOT💜
iniciarJogosClara();
// 💜 AQUI E QUANDO A MISA.JS ATUALIZA 💜
fs.watchFile("./misa.js", (curr, prev) => {
  if (curr.mtime.getTime() !== prev.mtime.getTime()) {
    consoleAviso("a index editado, reiniciando...");
    process.exit();
  }
});

fs.watchFile("./dono/dodo.js", (curr, prev) => {
  if (curr.mtime.getTime() !== prev.mtime.getTime()) {
    consoleAviso("dodo editado, reiniciando...");
    process.exit();
  }
});
// 💜 FIMMMM 💜

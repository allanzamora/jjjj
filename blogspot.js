
(async function() {
  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxdLgdcuKN1qgN3NUTQBAAuGSIaCrMBDOHGoDlRscOE2z7oVJ3MkkWJp9TGWB4SijK7/exec";
  const bodyEl = document.getElementById("file-body");
  const myArray = ["1xFkUIMiwesTuDPxK5tvTq6KOl_y6xO88", "1krHrHEuZjHZrwoyL06bn1gT_BLzzYmwK", "1q4yG_6nLrztycY5PlkL7IVY2gDexwlHy", "1lR10TJ_zKQuhSdk55YLCkSZylviZCkv0", "1MJw6X5hYs8NLX95_c9VM0FZjFR3nFjFf", "1rm1fGcXgtPeGfesHlP0w_uTQguYmN4cT", "1Wf6tht47jyorKbE7YvU1niZc-43iH22-", "1lY-Ku0LMGImc1DtKKCTlcaZ2_FJidUwn", "1KbBDnP9KGE6Rjao9KA2frwXEm-iaftb7", "1qcjf-SFPvGQS98P9orQt_pwrySATS2VE", "19VAEgA672TYzLnd5PrUXuvTf96zRIIrj", "1wZMec3Sd4VZO307cxRbBB6syoKdJ75De", "1kQqhc-i-V7m_wpB8tCfiRhJO4uFhNUqx", "14kb12RzTCTXOlqi0Gla0x5mHclU4T867", "1cxQq0iwTLXtZ5Ow6bsbqY2iZ6vm9RGKN", "1C7NEeyv1TGc0BM4tkZGKCOaOfyYUPa0y", "1_fMVRj9fmYTY3LLZ_UB7Sta_HUMtG67-", "1Vl5pgloxy8nuZKCg8NmGJaeTBS5jOh_i", "1ZP-xdVSwigai-CRdXBrHJ83xBUugaGen", "1HG5RIWgH-0MBhI6D4EJTtGUsf_xdLH1Y", "1FiDNCRtZUO-KieRuQGFCURQGfTIbtbDl", "10dXjuEou7IGDCl4oh3TlWhZtfvjKD8KR", "1IPahVgMe7WU15JztMF8xuLD-m1ViZumW", "1JBrVhxstQHawAPoBZnJ8_kVE3lmBMmsc", "1agFF6nZ1bF1O1S_dqhNZ05mylGNDwqHp", "1VNEOmGoF3ASSYVCbYWIBSwXUZttSMtRX", "1F_l4YdI85UcLn2dH04nAOwXKqjT_GI4S", "18HFrTW9bt851ioldkgw-OGPYmqXB8XAR", "1H2lpXMTN_Kkyb-UdrRFh8uKz94SMGl0y", "1_3N3dWBYMs9v2oaMkJn9-FfMhqilemm4", "1gBvilHQ1R49pV0UfUnKNkpdDaD3zIoG5", "15vO9XwynHIxWsDsOT_p2AV_QFYF33mP8", "13jPekU9K_wZy6n4ClotQ3gAVdvhIxpzE", "1wny1iWpy4M4pN9PRLqnmN5PmgPiz9X6C", "1b2w9mGN2n1Aq5eejo-9gslXPxAvIiI5I", "1IexZqcYIHZ3gBsqIFvZ9I_gHX08CWi9T", "1PCrBUHj4WL8l5aha2CzUqmFZaS8b1JIS", "18nwDvPCR5D5ZrB7ftkF2UmD5Erjgj-wG", "1YseAeaSH7RLheNmZSPIYA2bku5zkW5wI", "1NqA8l8C8J0QQvNiGHOUBzTSqJOfkpEy6", "1ISISH7N4h8atWuRgsDlMtpaSc5FX8VAy", "1iIjUMUJhgufbd0-WZsSafEwBjrWBP4lP", "1X0tcuVN2TmJjvTTddaIQMydreOb8Bu4V", "1LUGS7ztJwbuafvYyJKwdmcOMxTqNNTFi", "1-qN7jSHoSfrmAHhf4KcWYgRVEi4DEyyV", "1So73RgUyZd9x08U48OlavUTWQlkEDPw8", "1LGE7pF4U5X6yQihfe8qG_NMyu_pNeITN", "1_SX5hMUpQpTb49Z0LIEsBJXIc_tstLo8", "1v3Q7epAGG7c2J20FmLFtCv4QohdBtQM7", "1HV8Mc5kQ8X9tqPY5oNv9ZOtiBIREGPAa","103sSOEbscTVcEwzBVu5op4952K6YYc4N", "1q_0KYCZ7NAIVkMKIixxJKfH4tPluEw1a", "1jJejOymnRrWf8uGbzkQPKYtbjnLBDGts", "1-xJxtCcLUWICn8WETSLX2TVQ_T9dMNn1", "1NOvHGIZFnVo1Dz1CA6-9nNYy4ZhnNvqg", "1q3NnZa8YlgTIz-0iIFVtEGs5Yzgz88MN", "1iFZrsujCzYsCsPHXafe1bmwbibAESWqx", "1lzzHDMH96OSGTTT7ZOCx5FNHW9fSirYo", "16jBWjynlxchnikjzb4eNsjy_rV2ocCwg", "16qebQ_aK8qjXI97o88m_ilIY2MKNHMWU", "1PaSleGZfl84lPNLN_iOssqaWIogxO4B8", "12lud_gVS4ZYB_93bLiF1I6Ofwqk9ydd5", "1iOSt4ViUc_ml2Pr_8TgdLr6_KIT-Fnys", "1Pyccref7M5PFT0kqNNByFbC7ZAAkARh0", "1PTw5EN9eE2wRtzY9_6Ix16DBEnShNmdF", "1pdcdOT0wzCBrtAYBQUnjKObpGGbPVxWM", "1mqpAIrMyb5LtrKR4HzB7WONbl1QbARGr", "1L_zV27NIeNOQII_DGn3e3NGw8MNcZe5R", "1OIMZ1fGpDX6aFjm3alZVUrZgXKw9F5TX", "1_Ocv1okpcG8_qlzoxJPcpPqWW6oUPqFh", "1f90kvvZahUKFKrtcrg-_Aobnu9S6ol5d", "1UJd2U3kqBzrcAXEBbCqLWB2fku3f7s9X", "1Jv-9zrYKy7IpFLm7hQfPx7_6UqWLMXIQ", "1rV_YG2Tuk7-bl0Hwp6hzF9LrfPPRgchC", "1gUhGP5otRQ2QCBcu5PtdoY3m3mOPKSi7", "1F1Kp9cc7rrLI_FhFbsXUA9LvtLJq9rU8", "16NOWwQTAZsWsgAnaXKJmv33tX39RhzrB", "188XrQCVSPuDSUziobcOHMwnZQ5_K1vhV", "1Anb2UgQSIgLOeASMipwUlzd15ZQs4vZX", "14OQhvjDpsl82PZYBz0R2z3jT3kSUrbpY", "10aM30-3QNMWN1DsQ_7oH5LFoxw3JHIVv", "11T3kwiJ6pK8Qxi3DGlJw6hbotnseNO9o", "157AtEyn-VSSZlejG0uwVwndbjwCQ-teY", "1HEBIuEouq24v72qEaGIg02XEia7dj2gq", "1ylIHMHBZlzkahI8YJ2hr6hrxc_Dh9XXQ", "13x_A8PyxOoo2O3AjoDnWc7LMq00HmSWs", "1xorttxrlFkB_RK70aR4M-euXGSuzIWx5", "1YdhrYResQ1MUdW2Rxt6uY0020BlgbQV_", "1WefNH8IQ-V9pmZqQDF7JshsAA5DIG0uh", "1c-iSGsoFxz1z5BXt9nkDEZvdnZJCpDwR", "1cmHsEeNWd9W0c6MsaDenLS8ovLYNr0LU", "1gv4Jv-FkDUgA3qMmEtRTeN-xHSDaY0kd", "1QSV82ZQ9Js24lSehmWuV5_4SlyrdZ8y8", "1xrSa99EvXOBKLkqCkR8_gumdF3JHEivQ", "1VoGQIinn1_wOQ8TaJEgnUVB23MeAydAV", "1-3OjD9y-QxmdqAnYbvfx5xJ1kTAAtLnG", "1TcKsd-EVGz1guKvFGaDr3tikKoExh07f", "1svQgMOi7MbCjxLUWo6X-hiHtJXjKq9TL", "18GLED4meN-JixU_SjOAsbTdQCxjg57SE", "10kjpGZOnCFeEy9StdLFCI35nMuqANgyV", "1Lr_lEeahQIr64ZCXM2WgGTPhNGsznAsX", "1jnnSxEYoepq74rp4a-bPZoE_5AAdPFtK", "1hFedHdd7Vwg3uf7RPnFNzFO0W2oT1U8K", "1N3SDPNd1sLY1pKhIi6RLg_9dmiYnlGtu", "1deSXxGWYxuApkbKTRNhqaThk1nw-VHIw", "1vgugM0Mn8Wu2wYc9UfBIyT2Byd2IfTYT", "1DKnfCnY8TuY1x6GQ9VOS56Sny-jN49s5", "1EVsTMKKNGt6SfpxA97OkC5jNNN56FLMV", "1MJWFCLx3betXNfL_zo0gkoJ6mwTtulDZ", "1SqppDuP472pjgbF9tMvQ4CRMJBG9g-A1", "18NsCwvEk9zqvMdCxp7M8yHZlT8OHAK9y", "1os2wC1Uggv6r4vHLnO1jiQZJmUXMsAvV", "1B34_g4YLQwtVIDPdUxAB1gSvMbZSH2EG", "1--ZTh8fMLYYzwl34GpubXeRmXroBN2iq", "1O__R6fSzXDUouM8HJOB9UDkkB_HWcgKc", "1-_Ib5WDYJhKpnLjcyODPcZJIX04HRLwa", "1GAGBhnLPvbSADfVh7SenadC1mKy5fSu0", "19tkbu_Qyimqi4cBY-Fgi4JuEUAbBI6fQ", "1RprHn4vGDmrYwrrqUUnRbBnCHc3DgniM", "1sTN4ih0GIrVaCG2cBYpqyGUEf6Y9LHhX", "15Hkk-S_-N7egmWprmUF4VIUEbs7fckM-", "1GNyG8a_s8xqMGkHTTYyAHFht3y3ZpSH2", "1WYNTVTjyq9ckvAwba5B0e7P6ERYBbSpX", "1gn-1skrWp6ZQOMhGrTTmGIpVy1J1BBfy", "1wf6d9BIyxo9E5MvsuPX2pNMhwkiymFdP", "1QWaTclxkAGsxOYEfZ5gujmXxqqzRfrv3", "1pKQV8iRjB2C3HhB2uvP_7wkmUEutJFIS", "1qzVuF1oeAefADisfVbDQaDAF1MV4jITm", "1-5c_mmRKECmVuMABLAGJfp2xeGCWvF7R", "1sppPKwGIEZ5lYKAmzPw9RhPSExYQ1ewK", "1nkYJlvZk9BPgxhMvJ5vDI_QE8KdfDO7-", "1SLntVEQI_bkD8w2LYGjGNZtrBOKlrfoF", "1O0AZC96bIPPe1gSiuOzFrj-D5rsKkZbu", "1ta06QB92nXraQxsgKOz9J3F6pRmQjrYC", "1e6pc36DA_HV-QN50DvZU4nXu81BA9ckk", "1YT1FL6H2Ux9ayKWQNgzjE_qdURAyQz5m", "1X0AP2iCgkUe0fiYjfLpVFn5FIp1waty0", "1rMe_PbgQT0RtX_YiTmiYuSe4NHiR0ULD", "12Saiu3g80unfA44Lgln_4GX572MHdkKf", "1T2GV8FK7xE-nMaYlhHcJwhOMJj_OJKjQ"];
  
  const randomIndex = Math.floor(Math.random() * myArray.length);
  const randomValue = myArray[randomIndex];
  const driveFileId = randomValue;
  try {
    const response = await fetch(`${SCRIPT_URL}?g=${encodeURIComponent(driveFileId)}`);
    if (!response.ok) throw new Error("Server communication error");
    const result = await response.json();
    if (result.error) {
      throw new Error(result.error);
    }
    if (Array.isArray(result.data)) {
      let listHtml = "<ul>";
      result.data.forEach(item => {
        listHtml += `<li><a href="${item.url || '#'}" class="url_bold">${item.title || item.name || 'Untitled'}</a></li>`;
      });
      listHtml += "</ul>";
      bodyEl.innerHTML = "Go Back" +listHtml;
    } else if (typeof result.data === "object") {
      bodyEl.innerHTML = `<pre style="background:#f4f4f4; padding:12px; border-radius:6px; overflow-x:auto;">${JSON.stringify(result.data, null, 2)}</pre>`;
    } else {
      bodyEl.innerHTML = `<div>${result.data}</div>`;
      document.getElementById('xsub').click();
    }

  } catch (err) {
  }
})();
  
let timer = null;
let currentIndex = 0;
document.getElementById('xsub').click();
function getSubdomain(urlStr) {
  try {
    const url = new URL(urlStr.trim());
    return url.hostname.split(".")[0];
  } catch (e) {
    const cleaned = urlStr.trim().replace(/^(https?:\/\/)?/, "");
    return cleaned.split(".")[0];
  }
}

function submit() {
  if (timer) {
    clearInterval(timer);
  }
  const input = document.getElementById("myInput").value;
  const lines = input.split("\n").filter(line => line.trim() !== "");
  if (lines.length === 0) return;
  currentIndex = 0;
  change(lines);
  timer = setInterval(function() {
    change(lines);
  }, 3000);
}

function change(lines) {
  const currentLine = lines[currentIndex];
  
  const ccc = getSubdomain(currentLine);
  document.getElementById("result").textContent = ccc;
  const script = document.createElement('script');
  script.src = 'https://' + ccc + '.blogspot.com/?m=1';
  document.head.appendChild(script);
  currentIndex = (currentIndex + 1) % lines.length;
}

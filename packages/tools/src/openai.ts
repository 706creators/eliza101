const renderTemplate = (
  template: string,
  state: Record<string, any>
): string => {
  return template.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (match, path) => {
    // 处理嵌套属性路径，如 "user.name"
    const value = path.split(".").reduce((obj: any, key: string) => {
      return obj?.[key];
    }, state);

    // 处理 undefined 或 null 的情况
    if (value === undefined || value === null) {
      console.warn(`Warning: Template key "${path}" not found in state`);
      return match; // 保留原始模板标记
    }

    return String(value);
  });
};

export const generateText = async (
  state: { body: string },
  template: string
) => {
  console.log(process.env.REDPILL_API_KEY);
  const content = renderTemplate(template, state);
  // console.log("send : ", content);

  const response = await fetch("https://api.deepseek.com/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY}`,
    },
    body: JSON.stringify({
      model: process.env.MODEL,
      messages: [{ role: "user", content: content }],
    }),
  });

  console.log("response : ", response.status);

  const data = (await response.json()) as any;
  return data.choices[0].message.content;
};

export const summaryContent = async (content: string) => {
  const response = await generateText(
    {
      body: content,
    },
    `
    帮我汇总以下的内容：

    {{body}}
    
    `
  );
  return response;
};

export const trimJSON = async (content: string) => {
  return content.replace(/```json\n|```/g, "");
};

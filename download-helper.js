// 下载地址助手 - 提供多重备用方案
class DownloadHelper {
    constructor() {
        this.mirrors = [
            'https://ghproxy.com/',
            'https://hub.fastgit.xyz/',
            'https://github.91chi.fun/',
            'https://cdn.jsdelivr.net/gh/'
        ];
    }

    // 生成备用下载地址
    generateMirrorUrls(originalUrl) {
        const urls = [originalUrl]; // 原始地址作为最后备选
        
        // GitHub代理镜像
        this.mirrors.slice(0, 3).forEach(mirror => {
            urls.push(`${mirror}${originalUrl}`);
        });
        
        // jsdelivr CDN (需要转换格式)
        if (originalUrl.includes('github.com/') && originalUrl.includes('/releases/download/')) {
            const match = originalUrl.match(/github\.com\/(.+?)\/(.+?)\/releases\/download\/(.+?)\/(.+)/);
            if (match) {
                const [, owner, repo, tag, filename] = match;
                urls.push(`https://cdn.jsdelivr.net/gh/${owner}/${repo}@${tag}/${filename}`);
            }
        }
        
        return urls;
    }

    // 测试URL可访问性
    async testUrl(url) {
        try {
            const response = await fetch(url, { 
                method: 'HEAD',
                mode: 'no-cors'
            });
            return true;
        } catch (error) {
            return false;
        }
    }

    // 获取最佳下载地址
    async getBestDownloadUrl(originalUrl) {
        const urls = this.generateMirrorUrls(originalUrl);
        
        for (const url of urls) {
            console.log(`测试地址: ${url}`);
            if (await this.testUrl(url)) {
                console.log(`可用地址: ${url}`);
                return url;
            }
        }
        
        throw new Error('所有下载地址均不可用');
    }
}

// 使用示例
const helper = new DownloadHelper();
const originalUrl = 'https://github.com/lizhouliang/zliangclawUpdate/releases/download/ZliangClaw1.0.2/ZliangClaw_1.0.2_x64-setup.exe';

// 获取最佳下载地址
helper.getBestDownloadUrl(originalUrl).then(bestUrl => {
    console.log('最佳下载地址:', bestUrl);
}).catch(error => {
    console.error('获取下载地址失败:', error);
});

//修改弹出窗体
///html/body/form/div[4]/ul/li[4]/a
$x('html/body/form/div[4]/ul/li[4]/a')[0].target='_self';
//点击 学生平台：.click();
$x('html/body/form/div[4]/ul/li[4]/a')[0].click();
//点击学生登录:/html/body/div/div/div[1]/div/div/div/div/nav/div/div[2]/ul[2]/li[1]/a
$x('/html/body/div/div/div[1]/div/div/div/div/nav/div/div[2]/ul[2]/li[1]/a')[0].target='_self';
$x('/html/body/div/div/div[1]/div/div/div/div/nav/div/div[2]/ul[2]/li[1]/a')[0].click();

//输入帐号
document.getElementById('username').value='1880201450633';
//输入密码:password
document.getElementById('password').value='19960210';
//点击登录：/html/body/div/div/div[2]/form/div/div/div[4]/button
document.getElementsByClassName('btn btn-primary btn-block')[0].click();